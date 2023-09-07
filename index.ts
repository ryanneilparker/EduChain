import express, { Express, Request, Response } from 'express';
import index from './api/index.routes';
import web3 from './api/web3.routes';
import auth from './api/auth.routes';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

require('./middleware/passport.middleware');
app.use(passport.initialize());
app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

app.use(index);
app.use(web3);
app.use(auth);

app.listen(port, () => {
  console.log(`[⚡️]: Server is running at http://localhost:${port}`);
});