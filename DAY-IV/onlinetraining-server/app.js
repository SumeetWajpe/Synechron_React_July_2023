var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var jwt = require("jsonwebtoken");

const SECRET_KEY = "SECRET_KEY";

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.post("/login", (req, res) => {
  // get uname + pwd from req.body
  // verify if the user exists ! DB
  // sign the token (create)

  let payload = { name: req.body.uname, lastLogin: "Monday 25th" };
  jwt.sign(payload, SECRET_KEY, { expiresIn: "2 Days" }, (err, token) => {
    if (err) console.log(err);
    else return res.json({ token });
  });
});

app.post("/verify", (req, res) => {
  const authHeader = req.headers.authorization; // Bearer token
  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET_KEY, (err, decodedToken) => {
    if (err) return res.status(500).json({ err: "Invalid Token" });
    console.log(decodedToken);
  });
  res.json({ msg: "success" });
});


app.listen(4000, () => {
  console.log("Server running @ 4000 !");
});
module.exports = app;
