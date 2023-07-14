import express, { Express } from "express";
import { connect } from "../db/config";

export class Server {
    app: Express;

    constructor() {
        this.app = express();
        this.connect();
        this.middlewares();
    };

    async connect(): Promise<void> {
        await connect();
    };

    middlewares(): void {
        this.app.use(express.json());
    };

    listen(): void {
        this.app.listen(8080, () => {
            console.log(">>> Server on port 8080");
        });
    };
};