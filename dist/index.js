"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public', 'index.html'));
});
app.get('/create', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public', 'create.html'));
});
app.get('/verify', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public', 'verify.html'));
});
app.listen(port, () => {
    console.log(`[⚡️]: Server is running at http://localhost:${port}`);
});
