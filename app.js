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

const Journal = require("./models/journals.js");
const Entry = require("./models/entries.js");

const journalRouter = require("./routes/journals.js");
const homeRouter = require("./routes/home.js");
const { default: mongoose } = require("mongoose");

main().then(()=>{
    console.log("connected to mongo");
}).catch(err =>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/solace");
}

app.use("/home",homeRouter);
app.use("/journals",journalRouter);

app.get("/", (req, res) => {
    res.send("Home Page");
})

app.listen(3000,()=>{
    console.log("Port listening on 3000");
});