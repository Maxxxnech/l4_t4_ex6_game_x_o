import React from "react";
import "./css/Cell.css";

export default function Cell({ cell, handleClick }) {
  const classList = ["cell"];

  cell.winner && classList.push("winner");

  return (
    <button className={classList.join(" ")} onClick={handleClick}>
      {cell.value}
    </button>
  );
}
