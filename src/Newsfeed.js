import React, { useState, useEffect } from "react";
import "./Newsfeed.css";
import LineGraph from "./LineGraph";
import TimeLine from './TimeLine'

function Newsfeed({stocksData, stock}) {
  const [popularTopics, setTopics] = useState([
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Technology",
    "China",
    "Pharma",
  ]);

  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chart__section">
          <div className="newsfeed_price_asset">
            <h1> $394,562.71</h1>
            <p> -$128.34 (-0.03%) Today </p>
          </div>
          <div className="newsfeed__chart">
            {stock && Object.keys(stocksData).map(s => (
              <LineGraph visible={stock === stocksData[s].name} stock={stocksData[s].name} stocksData={stocksData} />
            ))
            }
            <TimeLine />
          </div>
        </div>
        <div className="newsfeed__buying__section">
          <h2> Buying Power</h2>
          <h2> $78.32</h2>
        </div>
        <div className="newsfeed__market__section">
          <div className="newsfeed__market__box">
            <p> Markets Closed</p>
            <h1> Happy MLK Day</h1>
          </div>
        </div>
        <div className="newsfeed__popularlists__section">
          <div className="newsfeed__popularlists__intro">
            <h1>Popular lists</h1>
            <p>Show More</p>
          </div>
          <div className="newsfeed_popularlists_badges">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
