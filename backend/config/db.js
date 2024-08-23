const mongoose = require('mongoose');
const mongo_uri = process.env.MYBLOG_DB;


const connectDB = async () => await mongoose.connect(mongo_uri)
    .then(() => {
        console.log("Connected to Blog DB");
    })
    .catch((err) => {
        console.error('Error connecting to DB: ', err);
    })
module.exports = connectDB;