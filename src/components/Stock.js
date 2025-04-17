import React from "react";

function Stock({ stock, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(stock)}>
      <div className="card-body">
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">{stock.ticker} - ${stock.price}</p>
        <p className="card-text"><em>{stock.type}</em></p>
      </div>
    </div>
  );
}

export default Stock;
