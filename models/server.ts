import express, { Express } from "express";
import { connect } from "../db/config";
import studentsR from "../routes/studentsR";

export class Server {
    app: Express;

    constructor() {
        this.app = express();
        this.connect();
        this.middlewares();
        this.routes();
    };

    async connect(): Promise<void> {
        await connect();
    };

    middlewares(): void {
        this.app.use(express.json());
    };

    routes(): void {
        this.app.use("/api", studentsR);
    };

    listen(): void {
        this.app.listen(8080, () => {
            console.log(">>> Server on port 8080");
        });
    };
};