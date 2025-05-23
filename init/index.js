const mongoose = require("mongoose");
const initData = require("./journalData.js");

const Journal = require("../models/journals.js");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/solace');
}
main().then(() => {
    console.log("MongoDB connnected");
}).catch((err) => {
    console.log(err);
});

const initDB = async () => {
    try {
        await Journal.deleteMany({});
        await Journal.insertMany(initData);
        console.log("Database was initialized");
    } catch (error) {
        console.error(error);
    }
};


initDB();
