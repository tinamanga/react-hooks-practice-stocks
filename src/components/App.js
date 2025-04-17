import React, { useEffect, useState } from "react";
import StockContainer from "./components/StockContainer";
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data));
  }, []);

  function handleBuy(stock) {
    if (!portfolio.includes(stock)) {
      setPortfolio([...portfolio, stock]);
    }
  }

  function handleSell(stock) {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
  }

  function handleSortChange(e) {
    setSortBy(e.target.value);
  }

  function handleFilterChange(e) {
    setFilterBy(e.target.value);
  }

  // Derived state: filtered and sorted stocks
  const filteredStocks = stocks.filter((stock) => {
    return filterBy === "All" ? true : stock.type === filterBy;
  });

  const sortedStocks = [...filteredStocks].sort((a, b) => {
    if (sortBy === "Alphabetically") {
      return a.ticker.localeCompare(b.ticker);
    } else if (sortBy === "Price") {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <div>
      <h1>Flatiron Stock Exchange</h1>

      <div>
        <label>Sort By: </label>
        <label>
          <input
            type="radio"
            value="Alphabetically"
            checked={sortBy === "Alphabetically"}
            onChange={handleSortChange}
          />
          Alphabetically
        </label>
        <label>
          <input
            type="radio"
            value="Price"
            checked={sortBy === "Price"}
            onChange={handleSortChange}
          />
          Price
        </label>
      </div>

      <div>
        <label>Filter By Type: </label>
        <select value={filterBy} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Finance">Finance</option>
          <option value="Health">Health</option>
          <option value="Sportswear">Sportswear</option>
        </select>
      </div>

      <div className="row">
        <div className="col-8">
          <StockContainer stocks={sortedStocks} onStockClick={handleBuy} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onStockClick={handleSell} />
        </div>
      </div>
    </div>
  );
}

export default App;
