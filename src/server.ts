import express from 'express';
import payload from 'payload';
import { serverURL } from './payload.config'

require('dotenv').config();
const app = express();

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here
console.log(serverURL)
app.listen(3000);