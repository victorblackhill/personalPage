const express = require("express");
const router = express.Router();

// const router = require("express").Router()

router.get("/", (req, res) => {
  res.render("signin.hbs");
});

const signUser = async function (req, res, next) {
  try {
        const myUser = {...req.body}
        const foundUser = await User.findOne({email:myUser.email})
        
        if(!foundUser){
            res.redirect("/signup");
        }
        const isSamePassword = bcrypt.compareSync(req.body.password,)



  } catch {
    err;
  }
  {
    console.error(err);
  }
};

router.post("/", signUser);

module.exports = router;
