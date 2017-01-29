import {Configuration} from './configurations/ConfigurationLoader'
import {Server} from './Server'
//import RamlAutoRoute from 'raml-autoroute'
let RamlAutoRoute = require('raml-autoroute')


let config:any = Configuration
var server = new Server()

// Load Raml Specification file
// server.setRamlFile(config.raml_specification_file)
// server.processRaml()

let raml_auto_route = new RamlAutoRoute(config.raml_specification_file)



// Debug : print schema if true
let print_schema = false
// Here to get raml parsed
if (print_schema) {
    let ramljson = raml_auto_route.getRamlJsonSchema()
    console.log(JSON.stringify(ramljson, null, 2))
}


console.log(raml_auto_route.getRoutes())

// Standart routes management (express)
server.app.get('/', function (req: any, res: any) {
    console.log(req)
    console.log(res)
    res.send('Hello World')
})

// Launching server
server.app.listen(config.application_port)
