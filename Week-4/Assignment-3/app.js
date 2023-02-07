require('dotenv').config();
const express = require("express");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const mysql = require("mysql2/promise");
const crypto = require("crypto");
const { checkexist, register, checkPassword } = require("./SQLquery.js");

const options = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
};

const connection = mysql.createPool(options);
const sessionStore = new MySQLStore({}, connection);

const app = express();
app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Public"));
app.use(
    session({
        key: "session_cookie_name",
        secret: "session_cookie_secret",
        store: sessionStore,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000,
        },
    })
);

function auth(req, res, next) {
    if (req.session.username) {
        next();
    } else {
        return res.redirect("/home_page");
    }
}

app.listen(3000);

function cryptPwd(password) {
    let md5 = crypto.createHash("md5");
    return md5.update(password).digest("hex");
}

// console.log(cryptPwd("orin"))

app.get("/", auth, (req, res) => {
    res.redirect("/membr_page");
});
app.get("/home_page", (req, res) => {
    res.render("home_page");
});
app.get("/membr_page", auth, (req, res) => {
    res.send("<h1>Welecome to your own page!!</h1>");
});

app.post("/signin", async (req, res) => {
    signInEmail = req.body.email;
    signInPwd = cryptPwd(req.body.password);
    const checkEmail = await checkexist("email", signInEmail);
    const checkPwd = await checkPassword(signInEmail, signInPwd);
    if (checkEmail && checkPwd) {
        req.session.username = signInEmail;
        res.send("sucess");
    } else {
        res.send("Error: The email or password is wrong!");
    }
});
app.post("/signup", async (req, res) => {
    signUpEmail = req.body.email;
    signUpPwd = cryptPwd(req.body.password);
    const check = await checkexist("email", signUpEmail);
    if (check) {
        res.send("Error: This email already exists!");
    } else {
        await register(signUpEmail, signUpPwd);
        req.session.username = signInEmail;
        res.send("sucess");
    }
});
console.log('oo')