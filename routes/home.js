const express = require("express");
const { route } = require("./journals");

const router = express.Router();

router.get("/",(req,res)=>{
    res.render("home/home.ejs");
});

module.exports = router;