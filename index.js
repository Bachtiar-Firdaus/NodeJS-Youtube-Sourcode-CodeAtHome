const http = require("http");
const failed = require("./custom_module/failed-routing");
const succes = require("./custom_module/succes-routing");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  const url = req.url;
  if (url === "/ready") {
    res.write(JSON.stringify(succes));
  } else {
    res.write(JSON.stringify(failed));
  }
  res.end();
});

const hostname = "127.0.0.1"; // atau localhost
const port = 3000;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
