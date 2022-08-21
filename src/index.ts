import { Application, Router, json } from "express";
import Routes from "./routes";
export default class Server {
    constructor(app: Application){
        this.config(app);
        new Routes(app);
    }
    public config(app: Application): void {
        app.use(json()); 
    }
}