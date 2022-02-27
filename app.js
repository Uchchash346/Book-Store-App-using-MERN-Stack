const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use('/', (req, res, next) => {
    res.send("This is our starting");
})

mongoose.connect(
    "mongodb+srv://admin:m2TlT2MpkPcM1ncv@cluster0.xbwa2.mongodb.net/bookStore?retryWrites=true&w=majority"
)
    .then(() => console.log("Connected To Database"))
    .then(() => {
        app.listen(5000);
    }).catch((err) => console.log(err));





