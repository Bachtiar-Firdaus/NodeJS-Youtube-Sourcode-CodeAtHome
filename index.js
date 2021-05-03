const express = require("express");
const app = express();
const port = 3000;

const routers = require("./custom_module/router");

const log = (req, res, next) => {
  console.log(Date.now() + " " + req.ip + " " + req.originalUrl);
  next();
};

app.use(log);

app.use(routers);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
