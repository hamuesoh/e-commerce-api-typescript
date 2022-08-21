console.log("Hello asdsdasd")

import * as dotenv from "dotenv";
dotenv.config();
import * as express from "express";
import { Application } from "express";
import Server from "./src";

const app: Application = express();
const server: Server = new Server(app);
const port: number = process.env.PORT? parseInt(process.env.PORT) : 5000;

app.listen(port, 'localhost', function(){
    console.info(`Server running on : http://localhost:${port}`)
}).on('error', (err: any)=> {
    if(err.code === 'EADDRINUSE'){
        console.log('server start up error : address already in use')
    }else{
        console.log(err)
    }
})