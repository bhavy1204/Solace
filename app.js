const express = require("express");
const methodOverride = require('method-override');
const path = require("path");
const ejsMate = require("ejs-mate");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.engine('ejs', ejsMate);
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));


app.get("/journals",(req,res)=>{
    res.send("Working");
})

app.get("/", (req, res) => {
    res.send("Best of luck !");
})

app.listen(3000);