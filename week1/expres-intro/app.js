const express = require("express");

const app = express();

// make everything inside public available for use
app.use(express.static("public"));

// first argument is a path, second is a fn with req, res parameters
app.get("/", (request, response) => {
  console.log(request);
  response.send("index");
});

// app.get("/home", (request, response) => {
//   response.send("This is a home page!");
// });

// app.get("/about", (request, response) => {
//   response.send("This is a about page!");
// });

app.listen(3000, () => {
  console.log(`Server listening on port 3000!`);
});
