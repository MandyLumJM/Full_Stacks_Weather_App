const mysql = require('mysql2/promise');

let connection;

const connect = async () => {
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log('Connected to MySQL');
  } catch (error) {
    throw new Error('Database connection failed: ' + error.message);
  }
};

const getConnection = () => {
  if (!connection) throw new Error('Database connection not established');
  return connection;
};

module.exports = { connect, getConnection };
