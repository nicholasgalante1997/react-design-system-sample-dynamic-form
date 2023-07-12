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

  async query(query: string, values?: string[]): Promise<mysql.Query | null> {
    try {
      const connection = this.connect();
      if (values != null) {
        const queryResult: mysql.Query = await new Promise((resolve, reject) => {
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

      const queryResult: mysql.Query = await new Promise((resolve, reject) => {
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

async function checkForNecessaryTables() {

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

  } catch(e) {
    logger.error(e);
    process.exit(2);
  }
}