require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose connected successfully");
});
connection.on("error", (err) => {
    console.log("Mongoose default connection error: " + err);
});

app.get("/api/books/:id", function(req, res) {
    db.Books.findById(req.params.id)
    .then((singleBooks) => {
        res.json({
            message: "Requested all Books",
            error: false,
            data: singleBooks
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
        })
    })
});

app.get("/api/books", function(req, res) {
    db.Books.find({})
    .then((allBooks) => {
        console.log(allBooks);
        res.json({
            message: "Requested all Books",
            error: false,
            data: allBooks
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
        })
    })
});

app.post("/api/new", function(req, res) {
    db.Books.create(req.body)
    .then((newBooks) => {
        console.log("New books: ", newBooks);
        res.json({
            message: "Successfully created",
            error: false,
            data: newBook
        })
    }).catch((err) => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
        })
    })
});

app.use(express.static(__dirname + '/client/public'));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/public/index.html"));
});

app.listen(PORT, function() {
    console.log(`App is running on http://localhost:${PORT}`);
});