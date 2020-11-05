const express = require("express");
const app = express();
const pool = require("../db/mysql2");

app.get("/", (req, res) => {
    res.render("index", {})
})


app.get("/tanlov", (req, res) => {
    res.render("tanlov", {})
})

app.get("/xabarlar", (req, res) => {
    pool.query("SELECT * FROM tb.xabarlar limit ?,12", [req.query.id || 0], (err, rows, fields) => {
        console.log(err)
        if (err) return res.render("404");
        // console.log(rows)
        res.render("xabarlar", { data: rows })
    })
})




module.exports = app;