const express = require("express");
const app = express();
const pool = require("../db/mysql2");

const auth = require("../middleware/auth")
const img = require("../middleware/upload")


app.get("/login", async(req, res) => {
    res.render("login");
})

app.use("/home", async(req, res) => {
    if (req.body.login == 'root' && req.body.password == '1') {
        req.session.userId = 1;
        res.render("home")
    } else
        res.redirect("404")
})


// tekshrish
app.use(auth.authSession);



module.exports = app;