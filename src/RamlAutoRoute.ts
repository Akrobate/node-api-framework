"use strict";
// declare var require: any
// declare var process: any

// import * as bodyParser from "body-parser";
// import * as express from "express";
// import * as path from "path";
// var raml1Parser = require('raml-1-parser');

/**
 * The RamlAutoRoute.
 *
 * @class RamlAutoRoute
 */
export class RamlAutoRoute {

    private raml_json_schema: any;
    private flat_routes: any[];


    constructor(raml_json_schema: any) {
        this.raml_json_schema = raml_json_schema
        this.flat_routes = [];
    }


    public extractFlatRoutes() {
        this.recursiveFindRoutes(this.raml_json_schema)
        console.log(this.flat_routes)
    }

    public getFlatRoutes() {
        return this.flat_routes
    }


    public recursiveFindRoutes(branch: any) {
        if (branch.absoluteUri !== undefined && branch.methods !== undefined) {
            for(let method of branch.methods) {
                let current_route: any = {
                    verb: method.method,
                    absoluteUri: branch.absoluteUri,
                }
                this.flat_routes.push(current_route)
            }
        }

        if (branch.resources !== undefined) {
            for(let resource of branch.resources)
            this.recursiveFindRoutes(resource)
        }
    }
}
