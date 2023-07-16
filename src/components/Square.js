import React from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <div className="square" onClick={onSquareClick}>
      {value}
    </div>
  );
};

export default Square;
