'use strict'

// import * as bodyParser from "body-parser";
import * as express from 'express';
// import {Logger} from './Logger';
import {Routes} from './Routes';
import {Route} from './Route';
import {Request, Response} from 'express'

/**
 *
 *
 * @export
 * @class Server
 */
export class Server {

    public app: express.Application;
    private flat_routes: any[]

    /**
     *
     *
     * @private
     * @type {ServerConfigurationInterface}
     * @memberOf Server
     */
    private config: any

    // private app: express.Express = null;

    /**
     * Creates an instance of Server.
     *
     * @param {ServerConfigurationInterface} config
     *
     * @memberOf Server
     */
    public constructor(config: any) {
        this.config = config
        this.app = express()
        this.flat_routes = []
    }

    /**
     *
     *
     * @param {*} [middleware=null]
     *
     * @memberOf Server
     */
    public addMiddleware(middleware: any): void {
        if (middleware !== null) {
            this.app.use(middleware)
        }
    }

    /**
     *
     *
     * @param {Routes} [routes=null]
     *
     * @memberOf Server
     */
    public addRoutes(routes: Routes): void {
        if (routes !== null) {
            this.app.use(routes.getBaseUrl(), routes.getRouter())
        }
    }

    /**
     *
     *
     * @param {Routes} [routes=null]
     *
     * @memberOf Server
     */
    public addRoutesFromRamlAutoRoute(raml_auto_route: any): void {

        if (raml_auto_route !== null) {
            let auto_routes = raml_auto_route.getRoutes()
            let routes_list = []
            for (let route of auto_routes) {
                routes_list.push(new Route(route.verb, route.express_uri, (request: Request, response: Response) => {
                    console.log(request)
                    let data = {
                        'generic': "response",
                        'verb':route.verb,
                        'url': route.express_uri
                    }
                    return response.json(data)
                }))
                console.log(route)
            }
            let api_routes_configuration = {
                base_url: '/',
                routes: routes_list
            }
            this.addRoutes(new Routes(api_routes_configuration));
        }
    }

    /**
     *
     * @memberOf Server
     */
    public listen(): void {
        this.app.listen(this.config.port, () => {
            // Logger.getInstance().debug('Server running on port ' + this.config.port);
            console.log('Server running on port ' + this.config.port)
        });
    }

    public getApp(): express.Application {
        return this.app;
    }
}
