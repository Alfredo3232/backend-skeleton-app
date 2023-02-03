/* eslint-disable no-console */
// disabled for development
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";

let app = express();
const PORT = 3000;

app.use(helmet());

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Running at PORT: ${PORT}`);
});

mongoose
    .connect("", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
        app.listen(PORT || 5000);
        console.log("Connected MongoDB");
    })
    .catch(err => {
        console.log(err);
    });