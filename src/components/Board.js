import React from "react";
import Cell from "./Cell";
import "./css/Board.css";

export default function Board({cells, handleClick}) {
  return (
  <div className="board">
    {cells.map((cell, i)=><Cell key={i} handleClick={()=>handleClick(i)} cell={cell}/>)}
  </div>
  )
}
