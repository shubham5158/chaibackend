const env = require('dotenv').config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("shubham");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login with chai aur code</h1>");
});

app.get("/youtube",(req,res)=>{
    res.send("<h2>Chai aur code </h2>");
})

app.listen(process.env.PORT, () => {
  console.log(`Server is srunning on ${port} port`);
});
