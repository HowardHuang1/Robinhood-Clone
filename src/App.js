import {useState} from "react"
import "./App.css";
import Header from "./Header";
import NewsFeed from "./Newsfeed";
import Stats from "./Stats";

function App() {
  const [stocksData, setStocksData] = useState({})
  const [stock, setStock] = useState("AAPL")
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <NewsFeed stocksData={stocksData} stock={stock} />
          <Stats setStockData={setStocksData} setStock={setStock} />
        </div>
      </div>
    </div>
  );
}

export default App;
