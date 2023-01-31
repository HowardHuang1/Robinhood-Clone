# Robinhood Clone
Robinhood Clone is a duplicate of the stock trading app Robinhood. It supports functionality for 5 stocks called at 1 second intervals from the SIMDAQ API and displays the historical pricing of each stock within a stock chart. Ticker symbols and their associated price are displayed in the stocks list panel on the right.

![UI](https://github.com/HowardHuang1/Robinhood-Clone/blob/main/Robinhood%20UI.png)

The app consists of a React frontend, a Node server, and a SIMDAQ API that provides the ticker and price fluctuation information.


## Diagram

![Diagram](https://github.com/HowardHuang1/Robinhood-Clone/blob/main/Robinhood%20App%20Diagram.png)

# How To Use

To clone and run this application, you'll need [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/HowardHuang1/Robinhood-Clone.git

# Go into the repository
$ cd Robinhood-Clone

# Install dependencies
$ npm install

# Run the app
$ npm start
```

Packages and presets will be loaded automatically from `package.json`. 

Start the SimDAQ API Server by running 
```bash
npm run api
```

Start the Node Server by running
```bash
npm run server
```

This will begin generating stock prices with a price fluctuation range of 5% from the SimDAQ API server. The frontend will call the Node Server every second with each of the stock ticker symbols. The Node Server then submits requests to the SimDAQ API server which returns the current price to be displayed in the UI.

## UI
![UI2](https://github.com/HowardHuang1/Robinhood-Clone/blob/main/Robinhood%20UI%202.png)
