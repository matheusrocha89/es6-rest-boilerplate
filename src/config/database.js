const DB_URI = process.env.DB_URI || 'localhost';
const DB_PORT = process.env.DB_PORT || '47905';
const DB_USER = process.env.DB_USER || '';
const DB_PASS = process.env.DB_PASS || '';
const DB_NAME = process.env.DB_NAME || '';

export default {
  DB_URI,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_NAME,
};
