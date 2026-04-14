const express = require('express')
const app = express()
const port = 3000

function checkRoute(req, res, next) {
  console.log("Route :", req.url);
  next();
}

app.use((req, res, next) => {
  console.log("Data received:", new Date());
  next();
});

app.use(checkRoute);

app.get("/", (req, res) => {
  const now = new Date();
  
  res.send(`Hello World!<br>
    Trupti Rajgonda Zore - 24UAM316<br>
    Experiment 6 Output<br>
    Current Date & Time : ${now}`);
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})