const express = require('express');
const exphbs = require("express-handlebars");
const orm = require('./config/orm.js');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

orm.selectAll('burger_name', 'burgers')
.then(result => {
  console.log(result);
})
.catch(err => {
  console.log(err)
});

// orm.insertOne('burgers', 'burger_name', 'Turkey Gouda Burger');

// orm.updateOne('burgers', 'burger_name', 'Goat Cheese and Honey Burger', '5');

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
