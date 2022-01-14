// DB config

const mongoose = require("mongoose")

//const DB

const DB_URI = "mongodb://127.0.0.1:27017/myProjects"
console.log("I am here")

mongoose.connect(DB_URI)
    .then((db)=>{
        console.log(`Connected to ${db.connection.name}`)
        
    })
    .catch((err)=>{console.error(err)})


module.exports = mongoose