import express, { Request, Response, Router } from 'express';
import path from 'path';

const index: Router = express.Router();

index.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

index.get('/create', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public', 'create.html'));
})

index.get('/verify', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public', 'verify.html'));
})

export default index;
