import mongoose from 'mongoose';
import { DB_URI, DB_PORT, DB_USER, DB_PASS, DB_NAME } from '../config/database';

mongoose.Promise = Promise;
mongoose.connect(`mongodb://${DB_URI}:${DB_PORT}/${DB_NAME}`, {
  user: DB_USER,
  pass: DB_PASS,
});
