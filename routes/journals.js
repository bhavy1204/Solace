const express = require("express");
const router = express.Router();

router.get("/success",(req,res)=>{
    res.send("journals route is working");
});

router.get("/love",(req,res)=>{
    res.send("journals route is working, love");
});

router.get("/general",(req,res)=>{
    res.send("journals route is working, general");
});

module.exports = router;