import express, { Request, Response, Router } from 'express';
import path from 'path';
import { ensureAuthenticated } from '../middleware/auth.middleware';

const index: Router = express.Router();

index.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

index.get('/home', ensureAuthenticated, (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public', 'home.html'));
});

index.get('/create', ensureAuthenticated, (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public', 'create.html'));
})

index.get('/verify', ensureAuthenticated, (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public', 'verify.html'));
})

export default index;
