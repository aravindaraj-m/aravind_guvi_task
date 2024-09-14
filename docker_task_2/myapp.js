const http = require('http');

// Replace these with your own details
const details = {
  name: 'Aravindaraj M',
  age: 33,
  occupation: 'Devops Engineer',
  location: 'Chennai'
};

const server = http.createServer((req, res) => {
  // Set the response header to indicate HTML content
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Create HTML content with styling
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Basic Details</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.9;
          margin: 20px;
        }
        .details {
          font-size: 30px; /* Change this value to adjust font size */
        }
        .details h1 {
          font-size: 40px; /* Heading font size */
        }
      </style>
    </head>
    <body>
      <div class="details">
        <h1>My Details</h1>
        <p><strong>Name:</strong> ${details.name}</p>
        <p><strong>Age:</strong> ${details.age}</p>
        <p><strong>Occupation:</strong> ${details.occupation}</p>
        <p><strong>Location:</strong> ${details.location}</p>
      </div>
    </body>
    </html>
  `;

  // Send the HTML content as a response
  res.end(html);
});

// Server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});