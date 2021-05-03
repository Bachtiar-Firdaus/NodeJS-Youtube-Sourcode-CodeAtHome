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

// middleware menangani 404
// kode deklarasi routing
//versi 1
// app.use((req, res, next) => {
//   res.status(404).send("resource tidak ditemukan");
// });
//versi 2
// app.use((req, res, next) => {
//   res.json({
//     status: "error",
//     message: "resource tidak ditemukan",
//   });
// });
//versi 3
const notFound = (req, res, next) => {
  res.json({
    status: "error",
    message: "resource tidak ditemukan",
  });
};
app.use(notFound);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
