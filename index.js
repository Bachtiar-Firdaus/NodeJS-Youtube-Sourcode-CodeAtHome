const http = require("http");
const hello = require("./custom_module/helloWorld"); // <== cara mengimport

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write(hello); // <== cara pakai
  res.end();
});

const hostname = "127.0.0.1"; // atau localhost
const port = 3000;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
