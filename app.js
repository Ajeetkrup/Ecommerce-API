const express = require("express");
const app = express();
const db = require("./config/mongoose");

//setting up dotenv
const dotenv = require("dotenv");
// get config vars
dotenv.config();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use express router
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error on running the server : ${err}`);
    return;
  }

  console.log(`Server is successfully running at port : ${port}`);
});
