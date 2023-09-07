import express, { Express, Request, Response } from 'express';
import index from './api/index.routes';
import web3 from './api/web3.routes';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// Read urlencoded form payloads
app.use(express.urlencoded({ extended: true }));

// Serve static content
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use(index);
app.use(web3);
//app.use(auth);

app.listen(port, () => {
  console.log(`[⚡️]: Server is running at http://localhost:${port}`);
});