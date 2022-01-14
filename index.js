
const express = require("express")
const app = express();

const hbs = require('hbs');
hbs.registerPartials(__dirname+"/views/partials")

app.use(express.static(__dirname + "/public"))
const port = 5000
app.use(express.urlencoded({extended:false}))
const bodyParser = require("body-parser")

require("./config/dbConfig")




// 3 - Setup routes


const routerHome = require("./router/home.js")
app.use("/",routerHome)

const routerProjects = require("./router/projects.js");
app.use("/projects",routerProjects)

const routerUser = require("./router/newuser.js")
app.use("/newUser",routerUser)

const routerSignin = require("./router/signin.js")
app.use("/signin",routerSignin)

app.listen(port, ()=> console.log(`server running in http://localhost:${port}`))
