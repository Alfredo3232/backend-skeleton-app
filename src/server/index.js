import express from "express";

let app = express();
const PORT = 3000;

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Running at PORT: ${PORT}`);
});