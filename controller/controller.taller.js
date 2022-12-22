let ModelTaller = require("../model/model.taller")
class ControllerTaller
{
    static async readControllerTaller(){
        return ModelTaller.readModelTaller()
    }
}


module.exports = ControllerTaller