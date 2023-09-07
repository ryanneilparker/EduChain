"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./api/index.routes"));
const web3_routes_1 = __importDefault(require("./api/web3.routes"));
const auth_routes_1 = __importDefault(require("./api/auth.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(index_routes_1.default);
app.use(web3_routes_1.default);
app.use(auth_routes_1.default);
app.listen(port, () => {
    console.log(`[⚡️]: Server is running at http://localhost:${port}`);
});
