const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("How are you doig");
});

app.listen(8080, () => console.log("Lostening on port 8080"));
