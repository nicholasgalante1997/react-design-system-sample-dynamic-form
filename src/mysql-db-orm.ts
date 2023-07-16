import mysql from 'mysql';
import { logger } from './utils';

export class DatabaseManager {
  _config: mysql.ConnectionConfig;

  constructor(config: mysql.ConnectionConfig) {
    this._config = config;
  }

  connect(): mysql.Connection {
    return mysql.createConnection(this._config);
  }

  async query<R>(query: string, values?: string[]): Promise<R | null> {
    try {
      const connection = this.connect();
      if (values != null) {
        const queryResult: R = await new Promise((resolve, reject) => {
          connection.query(query, values, (err, results, fields) => {
            if (err != null) {
              console.log(err.message);
              connection.end();
              throw new Error(err.message);
            }
            resolve(results);
          });
        });

        connection.end();
        return queryResult;
      }

      const queryResult: R = await new Promise((resolve, reject) => {
        connection.query(query, (err, results, fields) => {
          if (err != null) {
            console.log(err.message);
            connection.end();
            throw new Error(err.message);
          }
          resolve(results);
        });
      });
      connection.end();
      return queryResult;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

export const db = new DatabaseManager({
  port: 3306,
  host: 'mysql_db',
  user: 'root',
  password: 'spectrum',
  database: 'form',
});

export async function pollDatabaseConnection(): Promise<boolean> {
  /** Promisify mysql.Connection#connect() which is synchronous but takes a callback */
  return new Promise((resolve, reject) => {
    /** get an instance of mysql.Connection */
    const dbQuerier = db.connect();
    /** mysql.Connection accepts a callback */
    dbQuerier.connect((err) => {
      /** if we've errored on connection, reject and error */
      if (err) {
        dbQuerier.end();
        logger.error(err);
        resolve(false);
        return;
      }
      dbQuerier.end();
      /** resolve if weve established a connection */
      logger.info('connected to database!');
      resolve(true);
    });
  });
}

export async function existingDatabases() {
  try {
    const res = await db.query<{ Database: string }[]>('SHOW DATABASES;');
    if (res) {
      const values = res.map((d) => d.Database);
      if (res.length && values.includes('form')) {
        return true;
      }
    }
    return false;
  } catch (e) {
    logger.error('An error was thrown during the operation `existingDatabases()`');
    throw e;
  }
}

export async function buildFormTable() {
  try {
    await db.query(
      'CREATE TABLE if not exists form (id VARCHAR(40) UNIQUE NOT NULL, updatedAt VARCHAR(25), form VARCHAR(10000) NOT NULL, PRIMARY KEY (id))'
    );
  } catch (e) {
    logger.error('An error was thrown during table creation `form`.');
    throw e;
  }
}

export async function buildFormDB() {
  try {
    await db.query('CREATE DATABASE [IF NOT EXISTS] form;');
    await db.query('USE form;');
  } catch (e) {
    logger.error('An error was thrown during table creation `form`.');
    throw e;
  }
}
