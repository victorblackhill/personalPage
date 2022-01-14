const {model,Schema}=require("mongoose")



const projectSchema = new Schema({
    name : {
        type:String,
        required:true
    },

    status:{
        type:String,
        enum:["TODO","WIP","DONE"]
    },

    githubURL:String,
    
    picture:String,

    testEnv:String,
})

const Project = model("projects", projectSchema);

module.exports = Project;
