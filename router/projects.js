const express = require("express");
const res = require("express/lib/response");
const { render } = require("express/lib/response");
const router = new express.Router();
const Project = require("../models/Project.model.js");
const bodyParser = require("body-parser")


//retrive the projects
const retrieveProjects = async function (req, res) {
  try {
    const retrievedProjects = await Project.find();
    console.log(
      "success, these are the retrieved projects ",
      retrievedProjects
    );
    res.render("projects.hbs", { project: retrievedProjects });
  } catch (err) {
    console.error("there is an error" + err);
  }
};

const renderProject = async function (req,res) {
    try {
        const theProject = await Project.findById(req.params.idParameter)
        res.json(theProject)
    } catch(err) {
        console.log(err)
    }
}



/*
    CatModel.find()
      .then((cats) => res.render("cats.hbs", { cats }))
      .catch((err) => console.error(err));

*/

//specify if the routes listed here are PREFIXED, example
// /projects/summary

router.get("/summary", retrieveProjects);

router.get("/search",()=>{
  console.log("in the search")
  console.log(req.query)
  
})
router.get("/:idParameter([a-z0-9]{24})",renderProject)


router.get("/addform",(req,res)=>{
    res.render("add.hbs")
})



router.post("/add",(req,res)=>{
    console.log(req.body.name)
    console.log("now we redirect")
    res.redirect("addform")
})

module.exports = router;


/*
router.get("/:id([a-z0-9]{24})", async (req, res) => {
    // the req is an object representing the incoming http request
    // amongst other values, it contains the route parameters
    // route.parameter > variable / placeholdres
    // console.log("what is req params ?");
  //   console.log(req);
  //   console.log(req.params);
    try {
      res.render("oneHacker.hbs", {
        hacker: await HackerModel.findById(req.params.id),
      });
    } catch (err) {
      console.error(err);
    }
  });
*/