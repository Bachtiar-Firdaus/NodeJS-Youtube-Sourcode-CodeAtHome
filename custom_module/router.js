const express = require("express");
const routers = express.Router();

routers.get("/", (req, res) => {
  res.send("request dengan method GET");
});

routers.post("/", (req, res) => {
  res.send("request dengan method POST");
});

routers.put("/", (req, res) => {
  res.send("request dengan method PUT");
});

routers.delete("/", (req, res) => {
  res.send("request dengan method DELETE");
});

routers.get("/post/:id", (req, res) => {
  res.send("artikel-" + req.params.id);
});

routers.get("/page-*", (req, res) => {
  res.send(req.path);
});

routers.get("/login", (req, res) => {
  const { username, password } = req.body;
  res.send(`Anda login dengan username ${username} dan password ${password}`);
});

module.exports = routers;
