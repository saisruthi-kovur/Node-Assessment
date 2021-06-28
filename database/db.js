const mongoose = require('mongoose');

const URL = "mongodb://127.0.0.1:27017";

const mongoConnect = (callback) => {
    mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(client =>{
        console.log("Connected to mongodb!");
        callback(client);
    })
    .catch(err =>{
        console.log(err);
    });
}

module.exports = mongoConnect;


