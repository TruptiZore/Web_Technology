# Hotel Finder Project

This is a travel finder javascript project that has been updated to include an Express backend.

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

## Backend Installation

The project uses a simple Express backend to serve the frontend files and potentially handle API requests. To get everything set up, run the following commands:

1. Navigate to the project directory:
   ```bash
   cd "D:\BTECH-3rd year\Web Tech\Hotel Finder Project"
   ```

2. Install the necessary Node.js dependencies:
   ```bash
   npm innit -y
   npm install express cors
   ```
   *Note: We installed `express` to run the active web server and `cors` to easily handle Cross-Origin Resource Sharing if we build external APIs down the line.*

## Running the Application

1. Start the Express server:
   ```bash
   node server.js
   ```

2. Once the server is running, you will see a message indicating the port. Open your browser and go to:
   [http://localhost:3000](http://localhost:3000)

The server will automatically serve `index.html` and any connected CSS or JS files.
