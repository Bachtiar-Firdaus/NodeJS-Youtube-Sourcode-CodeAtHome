const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("request dengan method GET");
});

app.post("/", (req, res) => {
  res.send("request dengan method POST");
});

app.put("/", (req, res) => {
  res.send("request dengan method PUT");
});

app.delete("/", (req, res) => {
  res.send("request dengan method DELETE");
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
