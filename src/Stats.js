import React, { useState, useEffect } from "react";
import "./Stats.css";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import StatsRow from "./StatsRow";
import axios from "axios";

// const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
const BASE_URL = "http://localhost:8000/data/";
// const KEY_URL = `&token=${key}`;
const KEY_URL = ``;




function Stats({setStockData, setStock}) {
  const [stocksData, setStocksData] = useState({});
  const [myStocks, setMyStocks] = useState([]);

  // const getMyStocks = () => {
  //   db
  //   .collection('myStocks')
  //   .onSnapshot(snapshot => {
  //       let promises = [];
  //       let tempData = []
  //       snapshot.docs.map((doc) => {
  //         promises.push(getStocksData(doc.data().ticker)
  //         .then(res => {
  //           tempData.push({
  //             id: doc.id,
  //             data: doc.data(),
  //             info: res.data
  //           })
  //         })
  //       )})
  //       Promise.all(promises).then(()=>{
  //         setMyStocks(tempData);
  //       })
  //   })
  // }

  const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}${stock}${KEY_URL}`)
      .catch((error) => {
        console.error("Error", error.message);
      });
  }

  const stocksList = ["AAPL", "MSFT", "FB", "TSLA", "UBER"];


  useEffect(() => {

    // getMyStocks();
    const interval = setInterval(() => {

    const testData = {}; 

    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock)
        .then((res) => {
          testData[stock] = ({
            name: stock,
            price: parseInt(parseFloat(res.data) * 100) / 100
          });
        })
      )
    });

    Promise.all(promises).then(()=>{
      console.log(testData);
      setStocksData(testData);
      setStockData(testData)
    })
  }, 1000)
  return () => clearInterval(interval)
  }, []);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p> Stocks</p>
          {/* <MoreHorizIcon /> */}
        </div>
        {/* <div className="stats__content">
          <div className="stats__rows">
            {stockList.map((stock) => (
              <StatsRow
                key={stock}
                name={stock}
                // openPrice={stock.info.o}
                // volume={stock.data.shares}
                price={stock.info.c}
              />
            ))}
          </div>
        </div> */}
        <div className="stats__header stats-lists">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {Object.keys(stocksData).length === stocksList.length && stocksList.map((stock) => (
              <StatsRow
                key={stocksData[stock].name}
                name={stocksData[stock].name}
                // openPrice={stock.o}
                price={stocksData[stock].price}
                setStock={setStock}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;