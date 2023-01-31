import React from "react";
import { useEffect, useState } from "react";
import StockChart from './stock.svg'

function StatsRow(props) {
const [percentage, setPercentage] = useState(0)
const [price, setPrice] = useState(props.price)
useEffect(() => {
    console.log(props.price)
    setPrice(props.price)
    setPercentage(((props.price - price)/price) * 100)
}, [price, props.price])
console.log(props)
  const getModal = () => {
    props.setStock(props.name)
  }
  return (
    <div className="row" onClick={getModal}>
      <div className="row__intro">
        <h1>{props?.name}</h1>
      </div>
      <div className="row__chart">
        <img src={StockChart} height={16}/>
      </div>
      <div className="row__numbers">
        <p className="row__price">{price}</p>
        <p className="row__percentage"> +{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default StatsRow;
