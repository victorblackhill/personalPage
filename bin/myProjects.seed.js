require("../config/dbConfig.js")

const Project = require("../models/Project.model.js")

require("../config/dbConfig.js")

const projects =[
    {
        name : "Personal Page",
        status: "WIP",
    },
    {
        name : "SimpleChess",
        status: "DONE",
        githubURL: "https://github.com/victorblackhill/chessProject",
        testEnv:"https://victorblackhill.github.io/chessProject/",
    }
]
const run = async function () {
    
    try{
        await Project.deleteMany()
        const createdProjects = await Project.create(projects)
        console.log(`I just created ${createdProjects.length} projects`)
        process.exit()
    } catch (err) {
        console.error(err)
        process.exit()
    }
    
}

run()