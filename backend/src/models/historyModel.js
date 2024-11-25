const { getConnection } = require('../db');

// Save search history
const saveHistory = async (city, country) => {
  const connection = getConnection();
  const query = 'INSERT INTO search_history (city, country, created_at) VALUES (?, ?, NOW())';
  await connection.execute(query, [city, country]);
};

// Retrieve search history
const getHistory = async () => {
  const connection = getConnection();
  const query = 'SELECT * FROM search_history ORDER BY created_at DESC';
  const [rows] = await connection.execute(query);
  return rows;
};

// Delete specific search record
const deleteHistory = async (id) => {
  const connection = getConnection();
  const query = 'DELETE FROM search_history WHERE id = ?';
  await connection.execute(query, [id]);
};

module.exports = { saveHistory, getHistory, deleteHistory };
