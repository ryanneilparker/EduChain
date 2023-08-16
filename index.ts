import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/create', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public', 'create.html'));
})

app.get('/verify', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public', 'verify.html'));
})

app.listen(port, () => {
    console.log(`[⚡️]: Server is running at http://localhost:${port}`);
});