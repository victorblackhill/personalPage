const express = require("express")
const User = require("../models/User.model")
const router =  express.Router()
const bcrypt = require('bcrypt')
SALT = 10

// const router = require("express").Router()




router.get("/",(req, res)=> {
    res.render("newuser.hbs")
})


const findUser = async function (req,res,next){
    try{

        const newUser = {...req.body}
        const foundUser = await User.findOne({email:newUser.email})
        console.log(">>> Request >>>",newUser)

        if(!newUser.user || !newUser.email || !newUser.password){
            console.log("we lack some info")
            res.redirect("/newuser")
        }
        else if(foundUser){
            console.log("User already exists")
            res.redirect("/newuser")
        }else {
            const hashedPassword = bcrypt.hashSync(newUser.password, SALT)
            newUser.password = hashedPassword
            console.log("hashed PW", newUser.password)
            res.send(newUser)
        }

        

    }catch(err){console.log(err)}
}

router.post("/", findUser) 

module.exports = router

