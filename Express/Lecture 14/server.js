/*
middleware -----
  Middleware is the function, that execute during request before sending the final response.

  There are three types of middleware ---
    1. request 
    2. response 
    3. next 
 */

const express = require("express");
const app = express();
const port = 3000;

function checkRoute(req, res, next) {
  console.log(req.url);
  next();
}

app.use((req, res, next) => {
  console.log("Data recieved", new Date());
  next();
});

app.use(checkRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



/* 
Activity ----
  1. what are types of middleware ?
  2. benifits of middleware 
  3. use in company level. why we use?
*/