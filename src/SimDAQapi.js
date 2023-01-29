const express = require("express");
var cors = require("cors");
const app = express();
const port = 9000;

function getPriceFluctuation(stock){
    const stockData = [
        {
            name: "AAPL",
            initialPrice: 140
        },
        {
            name: "MSFT",
            initialPrice: 250
        },
        {
            name: "TSLA",
            initialPrice: 160
        },
        {
            name: "FB",
            initialPrice: 150
        },
        {
            name: "UBER",
            initialPrice: 30
        }
    ]
    // const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "UBER"];
    // const initialPrice = [140, 250, 160, 150, 30];
    const currPrice = stockData.map(s => s.initialPrice);
    for(let i = 0; i < stockData.length; i++){
        currPrice[i] = (Math.random() - 0.5) * (0.05) * currPrice[i] + stockData[i].initialPrice;
        if (stock && stockData[i].name === stock) return currPrice[i]
    }
    return(currPrice);
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
    const data = getPriceFluctuation(stock)
    res.send(data?.toString() ?? "0");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});