const express = require("express")
const router = new express.Router()

// const router = require("express").Router()




router.get("/",(req, res)=> {
    res.render("home.hbs")
})

module.exports = router