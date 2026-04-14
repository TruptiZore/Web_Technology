const express = require('express')
const app = express()
const port = 3000

// Middleware
function checkRoute(req, res, next) {
  console.log("Route :", req.url);
  next();
}

app.use((req, res, next) => {
  console.log("Data received:", new Date());
  next();
});

app.use(checkRoute);

// Users Array (5 users)
const users = [
  { id: 1, name: "Trupti Zore", age: 21 },
  { id: 2, name: "Paras Patil", age: 22 },
  { id: 3, name: "Neha Patil", age: 23 },
  { id: 4, name: "Shravani Patil", age: 20 },
  { id: 5, name: "Aditi Zore", age: 16 }
];

// Home Route
app.get("/", (req, res) => {
  const now = new Date();
  res.send(`Hello World!<br>
    Trupti Rajgonda Zore - 24UAM316<br>
    Experiment 7 Output<br>
    Current Date & Time : ${now}`);
});

// User Routes
app.get("/users", (req, res) => {
  res.json(users);
});

// Dynamic Route → Get user by ID
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const user = users.find(u => u.id === userId);

  if (user) {
    res.send(`
      <h2>User Details</h2>
      ID : ${user.id} <br>
      Name : ${user.name} <br>
      Age : ${user.age}
    `);
  } else {
    res.status(404).send("<h3>User not found...</h3>Please check user_ID....!!");
  }
});

// Other Routes
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

// Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});