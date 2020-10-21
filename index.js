const express = require("express");
const app = express();
const axios = require("axios");
const exphbs = require('express-handlebars');
const routes = require("./routes");


app.engine("hbs", exphbs({extname: "hbs"}));
app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: true})); // set up middleware //
app.use(routes);


app.listen(32770);