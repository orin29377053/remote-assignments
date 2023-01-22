const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(express.static("Public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engine", "pug");
app.listen(3000);
app.get("/", (req, res) => {
    res.send("<h2>hello</h2>");
});
function sumOfNumber(N) {
    let sum = ((1 + N) * N) / 2;
    return sum;
}
app.get("/data", (req, res) => {
    const number = req.query;
    const inputNumber = number.number;
    if (inputNumber) {
        if (Number.isInteger(Number(inputNumber)) && Number(inputNumber) > 0) {
            res.send(`${sumOfNumber(Number(inputNumber))}`);
        } else {
            res.send("Wrong Parameter");
        }
    } else {
        res.send("Lack of Parameter");
    }
});
app.get("/trackName", (req, res) => {
    const name = req.query;
    const inputName = name.name;
    if (inputName) {
        res.cookie("name" , inputName)
        res.redirect("/myName");
    }
});


app.get("/myName", (req, res) => {
    let name=req.cookies.name
    res.render("myname",{name:name})
});