const {model,Schema}=require("mongoose")


const hobbiesSchema = new Schema({
    name : {
        type:String,
        required:true
    },

    status:{
        type:String,
        enum:["old","more or less","existing"]
    },

    relatedProject :{
        type :Schema.Types.ObjectId,
        ref:"Related Project"
    }

})

const Hobbies = model("projects", hobbiesSchema);

module.exports = Hobbies;