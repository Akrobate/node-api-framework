declare var require: any
var jenkinsapi = require('jenkins-api');

// no auth
// var jenkins = jenkinsapi.init("http://jenkins.yoursite.com");
// username/password
// var jenkins = jenkinsapi.init("http://username:password@jenkins.yoursite.com");
// API Token
// var jenkins = jenkinsapi.init('https://username:token@jenkins.company.com');

export class JenkinsClientApi {

    private jenkins_host: string
    private jenkinsclient: any

    /**
     * [constructor description]
     * @param  {string} jenkins_host [description]
     * @return {[type]}              [description]
     */
    constructor(jenkins_host: string) {
        this.jenkins_host = jenkins_host
        this.jenkinsclient = jenkinsapi.init(this.jenkins_host)
    }

    /**
     * [setJenkinsHost description]
     * @param  {string} host [description]
     * @return {[type]}      [description]
     */
    public setJenkinsHost(host: string){
        this.jenkins_host = host
        this.jenkinsclient = jenkinsapi.init(this.jenkins_host)
    }

    /**
     * [getAllJobs description]
     * @return {Promise<Object>} [description]
     */
    public getAllJobs():Promise<Object> {
        return new Promise( (resolve:any, reject:any) => {
            this.jenkinsclient.all_jobs( (err: any, data: any) => {
                if (err){
                    reject(err)
                }
                resolve(data)
            });
        })
    }

    /**
     * [getJobInfo description]
     * @param  {string}          job_in_jenkins [description]
     * @return {Promise<Object>}                [description]
     */
    public getJobInfo(job_in_jenkins: string):Promise<Object> {
        return new Promise( (resolve:any, reject:any) => {
            this.jenkinsclient.job_info(job_in_jenkins, (err: any, data: any) => {
                if (err){
                    reject(err)
                }
                resolve(data)
            });
        })
    }
}
