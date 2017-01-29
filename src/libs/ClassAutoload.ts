var fs = require('fs')

export class ClassAutoload {

    private class_directory_path: string

    private classes_collection: any

    constructor() {
        this.classes_collection = {}
    }

    public setClassDirectoryPath(path: string) {
        this.class_directory_path = path
    }

    public checkClassExistsFs(class_name: string): boolean {
        let path = this.class_directory_path + '/' + class_name + '.js';
        let result = false
        if (fs.existsSync(path)) {
            result = true
        }
        return result
    }

    public checkClassExistsMemory(class_name: string): boolean {
        let result = false
        if (this.classes_collection[class_name] !== undefined) {
            result = true
        }
        return result
    }

    public loadClass(class_name: string) {
        let path_require = this.class_directory_path + '/' + class_name + '.js'
        var loaded_class = require(path_require)
        this.classes_collection[class_name] = loaded_class
    }

    public getClass(class_name: string): any {
        if (this.checkClassExistsMemory(class_name)) {
            return this.classes_collection[class_name]
        } else if (this.checkClassExistsFs(class_name)) {
            this.loadClass(class_name)
            return this.classes_collection[class_name]
        }
        return undefined
    }
}
