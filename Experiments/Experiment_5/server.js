/*const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Get current date & time
    const now = new Date();

    // Send response
    res.write(`
        <h1>Hello</h1>
        <p>Current Date & Time:</p>
        <h3>${now}</h3>
    `);

    res.end();
});

// Start server on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

const http = require('http');

http.createServer((req, res) => {
  res.end("Hello\nCurrent Date & Time: " + new Date());
}).listen(3000);

console.log("Server running at http://localhost:3000");*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    const now = new Date()           // get current date & time
    res.send('Trupti Rajgonda Zore. 24UAM316<br>Experiment 5 : Output<br>Hello<br>Current Date & Time : ' + now)  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})