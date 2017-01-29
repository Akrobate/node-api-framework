"use strict";

// import * as bodyParser from "body-parser";
import * as express from "express";


/**
 * The server.
 *
 * @class Server
 */
export class Server {

    public app: express.Application;
    private flat_routes: any[]

    /**
     * [constructor description]
     * @return {[type]} [description]
     */
    constructor() {
        //create expressjs application
        this.app = express()
        this.flat_routes = [];
    }
}
