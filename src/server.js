const express = require("express");
var cors = require("cors");
const app = express();
const port = 8000;
const axios = require('axios')

app.use(cors());

app.get("/data/:stock", async (req, res) => {
    const stock = req.params.stock.toUpperCase();
    console.log(stock)
    console.log("http://localhost:9000/data/" + stock)
    const data = await (await fetch("http://localhost:9000/data/" + stock)).json()//await (axios.get("http://localhost:9000/data/" + stock)).data
    console.log(data)
    res.send(data?.toString() ?? "0");
});

app.listen(port, () => {
  console.log(`Robinhood app listening on port ${port}`);
});