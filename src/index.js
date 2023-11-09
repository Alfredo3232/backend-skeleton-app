import express from "express";
import helmet from "helmet";
import cors from "cors";
// import mongoose from "mongoose";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Testing a ec2 instance");
});

app.get("/api", (req, res) => {
    res.send("this is another endpoint");
});

app.listen(PORT, () => {
    process.stdout.write("Running at ---------------> " + `\x1b[3m\x1b[96mhttp://127.0.0.1:${PORT}\x1b[39m\x1b[23\x1b[0m` + "\n");
});

/*
    Alfredo3232 - 2/2/2023
    at least for right now I am thinking of using the MongoDB online service, since it will be more cost effective using different services
    to handle the work.
*/

//  mongoose
//     .connect("", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
//     .then(() => {
//         app.listen(PORT || 5000);
//         console.log("Connected MongoDB");
//     })
//     .catch(err => {
//         console.log(err);
//     });