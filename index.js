/* eslint no-console: 0 */
import http from 'http';
import app from './src/server';
// Remove the comment when you configured the database env variables
// import dbConnect from './src/database';

// dbConnect();

const APP_PORT = process.env.APP_PORT || 8888;
const server = http.createServer(app);
server.listen(APP_PORT);

console.log(`Listening on port: ${APP_PORT}`);
