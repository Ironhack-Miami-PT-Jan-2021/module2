const http = require("http");

const server = http.createServer((request, response) => {
  console.log("request made");
  if (request.url === "/") {
    response.write("Hello, world!");
    response.end();
  } else if (request.url === "/home") {
    response.write("<h1>Home page</h1>");
    response.end();
  } else {
    response.statusCode = 404;
    response.write("404 Page");
    response.end();
  }
});

server.listen(3000);
