"use strict";

// import * as bodyParser from "body-parser";
import * as express from "express";
// import * as path from "path";

/**
 * The server.
 *
 * @class Server
 */
export class Server {

  public app: express.Application;

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();
  }
}
