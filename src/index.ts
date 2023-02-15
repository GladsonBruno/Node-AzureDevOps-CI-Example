import express, { Express, Request, Response } from 'express';
import * as cors from 'cors';
import {Routes} from "./routes/routes";

const options: cors.CorsOptions = {
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
    ],
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: '*',
    preflightContinue: false,
};

const app: Express = express();
app.disable("x-powered-by");

let server;
let port = 8080;


Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
        (new (route.controller as any))[route.action](req, res, next);
    });
})

server = app.listen(port);
console.log(`API disponível na porta ${port}`)