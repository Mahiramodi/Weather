const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const path = require("path");
const hbs = require("hbs");

const staticPath = path.join(__dirname, "../public");
const partialPath = path.join(__dirname, "../template/partials");
const tempPath = path.join(__dirname, "../template/views");



app.set("view engine", "hbs");
app.set("views", tempPath);
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));


app.get("/", (req, res) => {
    res.render("index");
})

app.get("/index", (req, res) => {
    res.render("index");
})



app.get("/weather", (req, res) => {
    res.render("weather");
})

app.get("*", (req, res) => {
    res.render("error");
})

app.listen(port, () => {
    console.log("server created");
})