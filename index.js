const express = require("express");
const app = express();
const port = 3000;

/** 
ini untuk versi express dibawah dari versi 4.16

const bodyParser = require("body-parser");
// penggunaan middleware body parser
// parse x-www-form-url-encode
app.use(bodyParser.urlencoded({ extended: true }))
// parse JSON
app.use(bodyParser.json())

*/

// parse x-www-form-url-encode
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }));
// parse JSON
// app.use(bodyParser.json())
app.use(express.json());

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

//Menangani Error
//versi 1
// const errorHandling = (err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Terjadi kesalahan");
// };
// app.use(errorHandling);

//versi 2
const errorHandling = (err, req, res, next) => {
  res.json({
    status: "error",
    message: "terjadi kesalahan pada server",
  });
};
app.use(errorHandling);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
