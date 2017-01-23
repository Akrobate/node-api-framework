import {Configuration} from './configurations/ConfigurationLoader'
import {Server} from './Server'

let config:any = Configuration

var server = new Server()

server.setRamlFile(config.raml_specification_file)
server.processRaml()

// Here to get raml parsed
// let ramljson = server.getRamlJsonSchema()
// console.log(JSON.stringify(ramljson, null, 2))

server.app.get('/', function (req: any, res: any) {
    console.log(req)
    console.log(res)
    res.send('Hello World')
})

server.app.listen(config.application_port)
