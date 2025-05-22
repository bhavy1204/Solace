const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("journals/home.ejs");
});

router.get("/success", (req, res) => {
    res.render("journals/home.ejs");
});

router.get("/love", (req, res) => {
    res.render("journals/home.ejs");
});

router.get("/general", (req, res) => {
    res.render("journals/home.ejs");
});

module.exports = router;