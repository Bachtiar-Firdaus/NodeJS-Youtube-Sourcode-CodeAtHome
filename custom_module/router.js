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
  res.send("route: " + req.path);
});

routers.get("/about", (req, res) => {
  res.send("data about");
});

module.exports = routers;
