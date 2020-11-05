const express = require("express");
const app = express();
const session = require('express-session')
const fileUpload = require('express-fileupload');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use(fileUpload());

app.use(session({
    secret: 'keyboard cat',
}))

app.use("/", require("./app/app"));
const port = process.env.PORT || 8000;



app.listen(port, () => {
    console.log("Create Server " + port);
})