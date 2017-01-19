declare var require: any
var exec = require('exec');

export class UsbInfraRedDevice {

    private device_path:string

    /**
     * [setDevicePath description]
     * @param  {string} device_path [description]
     * @return {[type]}             [description]
     */
    public setDevicePath(device_path: string){
        this.device_path = device_path
    }

    /**
     * [sendIrMessage description]
     * @param  {string} ir_message [description]
     * @return {[type]}            [description]
     */
    public sendIrMessage(ir_message: string) {
        let cmd = 'sh ./ir_lights_commander.sh ' + ir_message + ' ' + this.device_path
        exec(cmd, function() {
            console.log("done...")
        })
        console.log(cmd)
    }

}
