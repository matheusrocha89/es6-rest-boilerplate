/* eslint no-console: 0 */
import http from 'http';
import app from './src/server';

const port = process.env.PORT || 8888;
const server = http.createServer(app);
server.listen(port);

console.log(`Listening on port: ${port}`);
