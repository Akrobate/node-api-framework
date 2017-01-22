import {Configuration} from './configurations/ConfigurationLoader'
import {Server} from './Server'

let config:any = Configuration

var server = new Server()

server.app.get('/', function (req, res) {
    console.log(req)
    console.log(res)
    res.send('Hello World')
})

server.app.listen(config.application_port)
