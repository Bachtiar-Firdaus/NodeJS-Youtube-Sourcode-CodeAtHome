const express = require("express");
const app = express();
const port = 3000;

const routers = require("./custom_module/router");
app.use(routers);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
