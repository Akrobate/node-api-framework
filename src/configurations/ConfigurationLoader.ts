declare var require: any
declare var process: any

import * as yml_parser from 'js-yaml'
var fs = require('fs')

const configuration_filename = 'configuration.yaml'
let used_configuration = yml_parser.safeLoad(fs.readFileSync(process.cwd() + '/' + configuration_filename, 'utf8'))

export let Configuration: Object = {
    jenkins_url: used_configuration.jenkins_url,
    jenkins_job_name: used_configuration.jenkins_job_name,
    usb_infrared_device_path: used_configuration.usb_infrared_device_path,
    jenkins_color_blue: used_configuration.jenkins_color_blue,
    jenkins_color_notbuilt: used_configuration.jenkins_color_notbuilt,
    jenkins_color_red: used_configuration.jenkins_color_red,
    jenkins_color_blue_anime: used_configuration.jenkins_color_blue_anime,
    jenkins_color_red_anime: used_configuration.jenkins_color_red_anime,
    refresh_timeout_seconds: used_configuration.refresh_timeout_seconds
}
