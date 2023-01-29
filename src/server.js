const express = require("express");
var cors = require("cors");
const app = express();
const port = 8000;
const axios = require('axios')

function algorithm() {
  return {
    AAPL: parseInt(Math.random() * 100000) / 100,
    TSLA: parseInt(Math.random() * 100000) / 100,
  };
}

function algorithm1(stock) {
    return {
      AAPL: parseInt(Math.random() * 100000) / 100,
      MSFT: parseInt(Math.random() * 100000) / 100,
      FB: parseInt(Math.random() * 100000) / 100,
      TSLA: parseInt(Math.random() * 100000) / 100,
      UBER: parseInt(Math.random() * 100000) / 100,
    }[stock];
  }

app.use(cors());

// app.get("/", (req, res) => {
//     res.sendFile('./test.js', {root: __dirname })
// });

// app.get("/data", async (req, res) => {
//     res.send(algorithm());
// });

app.get("/data/:stock", async (req, res) => {
    const stock = req.params.stock.toUpperCase();
    console.log(stock)
    console.log("http://localhost:9000/data/" + stock)
    const data = await (await fetch("http://localhost:9000/data/" + stock)).json()//await (axios.get("http://localhost:9000/data/" + stock)).data
    console.log(data)
    res.send(data?.toString() ?? "0");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});