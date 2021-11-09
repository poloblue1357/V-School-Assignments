import './App.css';
import React from "react"
import {Link, Route, Switch} from "react-router-dom"
import Home from "./Home"
import EconomicIndicators from './EconomicIndicators';

function App() {
  return (
    <div className="App">

      <nav className="navbar">
        <h1>Welcome to TradeView!</h1>
        <div className="links">
          <Link to="/" className="navbarLinks">Home</Link>
          <Link to="/tickersearch" className="navbarLinks">Ticker Search</Link>
          <Link to="/indicators" className="navbarLinks">Economics Indicators</Link>
          <Link to="/watchlist" className="navbarLinks">Watchlist</Link>
        </div>
      </nav>
      <br />
      <br />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/tickerSearch">
          {/* <TickerSearch /> */}
        </Route>
        <Route exact path="/economicIndicators">
          <EconomicIndicators />
        </Route>
        <Route exact path="/watchlist">
          {/* <Watchlist /> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
