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
  database: 'form'
})

async function pollDatabaseConnection(): Promise<boolean> {
  /** Promisify mysql.Connection#connect() which is synchronous but takes a callback */
  return new Promise((resolve, reject) => {
    /** get an instance of mysql.Connection */
    const dbQuerier = db.connect();
    /** mysql.Connection accepts a callback */
    dbQuerier.connect((err) => {
      /** if we've errored on connection, reject and error */
      if (err) {
        resolve(false);
      }
      /** resolve if weve established a connection */
      logger.info('connected to database!');
      resolve(true);
    })
  })
}

async function existingDatabases() {
  try {
    const res = await db.query<{ Database: string }[]>('SHOW DATABASES;');
    if (res) {
      const values = (res).map(d => d.Database);
      if (res.length && values.includes('form') && values.includes('render-metrics')) {
        return true;
      } 
    }
    return false;
  } catch (e) {}
}

async function buildDatabaseAndTables() {
  try {
    await db.query('CREATE DATABASE [IF NOT EXISTS] form;');
    await db.query('USE form;');
    await db.query('CREATE TABLE if not exists form (id: UNIQUE NOT NULL PRIMARY KEY VARCHAR(40), updatedAt: VARCHAR(25), formData: VARCHAR(10000))');
    await db.query('CREATE TABLE if not exists render-metrics (id: VARCHAR(40), timestamp: VARCHAR(25), renderData: VARCHAR(10000))');
  } catch (e) {
    logger.error(e);
  }
}

async function attemptConnection() {
  try {
    let retryInterval = 3000;
    let isConnected = false;
    let maxAttempts = 20;
    let attempt = 0;

    const interval = setInterval(async () => {
      if (isConnected) {
        clearInterval(interval);
      }
      if (attempt > maxAttempts) {
        clearInterval(interval)
      }
      attempt += 1;
      isConnected = await pollDatabaseConnection();
    }, retryInterval);

    return isConnected;

  } catch(e) {
    logger.error(e);
  } 
}

export async function setupDatabase() {
  try {
    let isConnected = await attemptConnection();
    if (isConnected) {
      if (!await existingDatabases()) {
        await buildDatabaseAndTables();
      }
    } else {
      throw new Error('Unable to connect to db... check server log output');
    }
   } catch(e) {
    logger.error(e);
    process.exit(2);
  }
}