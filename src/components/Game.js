import React, { useState } from "react";
import Board from "./Board";

import "./css/Game.css";
import getWinner from "./getWinner";

export default function Game() {
  const [boardState, setBoardState] = useState(Array(9).fill({}));
  const [isXTurn, setisXTurn] = useState(true);
  const [currentWinner, setWinner] = useState(null);

  if (!currentWinner) {
    const winner = getWinner(boardState);
    if (winner) {
      setWinner(winner);

      // Tag winner cells (for coloring, optional)
      const boardStateCopy = [...boardState];
      winner.pos.forEach((pos) => {
        boardStateCopy[pos] = {
          value: boardStateCopy[pos].value,
          winner: true,
        };
      });
      setBoardState(boardStateCopy);
    }
  }

  function handleClick(index) {
    // If game over or already marked - do nothing
    if (boardState[index].value || currentWinner) return;

    // Mark clicked cell
    const boardStateCopy = [...boardState];
    boardStateCopy[index] = { value: isXTurn ? "X" : "0" };

    // update board
    setBoardState(boardStateCopy);

    // Switch player
    setisXTurn(!isXTurn);
  }

  function resetBoard() {
    setBoardState(Array(9).fill({ value: null, winner: false }));
    setWinner(null);
  }
  
  var resetClasses = ["resetBoard"];
  currentWinner && resetClasses.push("gameOver");

  return (
    <div className="game">
      <h1>l4_t4, задание 6: крестики-нолики</h1>
      <p className="info" style={{color: currentWinner? "green": "black"}}>
        {currentWinner
          ? ("Победитель: " + currentWinner.value)
          : "Ход: " + (isXTurn ? "X" : "0")}
      </p>
      <Board cells={boardState} handleClick={handleClick} />

      <button className={resetClasses.join(' ')} onClick={resetBoard}>
        Новая игра
      </button>
    </div>
  );
}
