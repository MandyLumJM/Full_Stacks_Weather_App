const mysql = require('mysql2/promise');
const MAX_RETRIES = 5; // Maximum number of retries
const RETRY_DELAY = 8000; // Delay in milliseconds (8 seconds)

let connection;

async function connectToDatabase() {
  let attempts = 0;

  while (attempts < MAX_RETRIES) {
    try {
      // Attempt to connect to the database
      connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'weather_app_db', 
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'admin123',
        database: 'weather_app'
      });

      console.log('Database connection established');
      return connection; // If successful, return the connection
    } catch (error) {
      attempts++;
      console.error(`Database connection failed: ${error.message}`);

      if (attempts >= MAX_RETRIES) {
        throw new Error('Database connection failed after multiple attempts');
      }

      console.log(`Retrying   in ${RETRY_DELAY / 1000} seconds...`);
      // Wait for a specified delay before retrying
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
    }
  }
}

const getConnection = () => {
  if (!connection) throw new Error('Database connection not established');
  return connection;
};

module.exports = { connectToDatabase, getConnection };
