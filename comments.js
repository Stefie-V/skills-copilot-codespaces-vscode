const http = require('http');
const fs = require('fs');
const path = require('path');

// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.

// Note If you don't see the copilot code block suggestion or the red squiggly and the three dots ..., you can type control + enter to bring up the GitHub Copilot completions panel.Place your cursor here and type c (or Cmd + Enter on Mac) to bring up the GitHub Copilot completions panel.
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'comments.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

