import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onStockClick }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock key={stock.id} stock={stock} handleClick={onStockClick} />
      ))}
    </div>
  );
}

export default StockContainer;
