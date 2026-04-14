const express = require('express')
const app = express()
const port = 3000

// Home Route
app.get('/', (req, res) => {
  res.type('text/plain').send(
`HOME PAGE

Welcome to our website!

Here’s what you can explore:
- Latest Updates
- Featured Services
- Customer Reviews

Navigate:
- /about
- /services
- /contact`
  )
})

// About Route
app.get('/about', (req, res) => {
  res.type('text/plain').send(
`ABOUT US

We are a team dedicated to building modern applications.

Our Mission:
- Deliver quality solutions

Our Team:
- Developers
- Designers
- Managers`
  )
})

// Services Route
app.get('/services', (req, res) => {
  res.type('text/plain').send(
`OUR SERVICES

We provide:
- Web Development
- App Development
- UI/UX Design
- Cloud Solutions

Contact us for more details!`
  )
})

// Contact Route
app.get('/contact', (req, res) => {
  res.type('text/plain').send(
`CONTACT US

Email: contact@example.com
Phone: +91 9876543210

Address:
Kolhapur, Maharashtra, India

We are happy to help you!`
  )
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})