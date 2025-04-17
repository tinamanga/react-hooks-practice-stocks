import React from "react";
import Stock from "./Stock";

function PortfolioContainer() {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
       {portfolio.map((stock) => (
        <Stock key={stock.id} stock={stock} handleClick={onStockClick} />
      ))}
      }
    </div>
  );
}

export default PortfolioContainer;
