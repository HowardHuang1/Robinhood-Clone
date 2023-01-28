function getPriceFluctuation(){
    const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "UBER"];
    const initialPrice = [140, 250, 160, 150, 30];
    const currPrice = new Array(stocksList.length);
    for(let i = 0; i < stocksList.length(); i++){
        currPrice[i] = (Math.random() - 0.5) * (0.05) * currPrice[i] + initialPrice[i];
    }
    return(currPrice);
}