const express = require("express");
const { checkexist, register, checkPassword } = require("./SQLquery.js");
const app = express();
app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Public"));
app.listen(3000);


app.get("/", (req, res) => {
    res.redirect("/home_page");
});
app.get("/home_page", (req, res) => {
    res.render("home_page");
});
app.get("/membr_page", (req, res) => {
    res.send("<h1>Welecome to your own page!!</h1>");
});

app.post("/signin", async (req, res) => {
    signInEmail = req.body.email;
    signInPwd = req.body.password;
    const checkEmail = await checkexist("email", signInEmail);
    const checkPwd = await checkPassword(signInEmail, signInPwd);
    if (checkEmail && checkPwd) {
        res.send("sucess");
    } else {
        res.send("Error: The email or password is wrong!");
    }
});
app.post("/signup", async (req, res) => {
    signUpEmail = req.body.email;
    signUpPwd = req.body.password;
    const check = await checkexist("email", signUpEmail);
    if (check) {
        res.send("Error: This email already exists!");
    } else {
        await register(signUpEmail, signUpPwd);
        res.send("sucess");
    }
});
