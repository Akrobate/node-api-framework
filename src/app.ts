import {Configuration} from './configurations/ConfigurationLoader';
import {JenkinsClientApi} from './client_api/JenkinsClientApi';
import {UsbInfraRedDevice} from './physical_device/UsbInfraRedDevice';

let config:any = Configuration
let jenkins_client_api = new JenkinsClientApi( config.jenkins_url )
let ir_device = new UsbInfraRedDevice()
ir_device.setDevicePath( config.usb_infrared_device_path )

console.log("App ready, main loop starts")
setInterval(() => {
    jenkins_client_api.getJobInfo(config.jenkins_job_name).then((data: any) => {
        console.log(data.color)
        let jenkins_color_name = 'jenkins_color_' + data.color
        // check jenkins color has ir message definition
        if (config[jenkins_color_name] !== undefined) {
            ir_device.sendIrMessage(config[jenkins_color_name])
        } else {
            console.log("Jenkins color value : " + jenkins_color_name + " has no ir message defined")
        }
    })
    .catch((err) => {
        console.log(err)
        if (err === true) {
            console.log("Job name not found")
        }
    })
}, config.refresh_timeout_seconds * 1000);
