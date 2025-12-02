const http = require('http');

// Determine the environment. Default to 'development' if NODE_ENV is not explicitly set.
const environment = process.env.NODE_ENV || 'development';

// Get today's date
const today = new Date();

// Options for formatting the date string
const dateOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
};
const formattedDate = today.toLocaleDateString('en-US', dateOptions);

// Set the port
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Construct the message
    const message = `Application Environment: ${environment.toUpperCase()}\n\nToday's Date and Time: ${formattedDate} changes changes changes `;
    
    console.log(`Github actions should only run on branch main`);
    
    // Send the response
    res.end(message);
});

// Start listening on the specified port
server.listen(port, () => {
    console.log(`Server is running in ${environment.toUpperCase()} mode.`);
    console.log(`Access the application at http://localhost:${port}`);
});

// Basic error handling for the server
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Please close the other application or choose a different port.`);
    } else {
        console.error('Server error:', err);
    }
});
