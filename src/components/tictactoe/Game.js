import React, { useState } from "react";
import { calculate } from "../../calculate";
import Board from "./Board";
import Avatar from "../avatar/Avatar";
import Popup from "../popup/Popup";
import Reset from "../reset/Reset";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [next, setNext] = useState(true);
  const winner = calculate(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = next ? "X" : "O";
    setBoard(boardCopy);
    setNext((next) => !next);
  };
  const resetGame = () => {
    setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Avatar turn={next} />
      <Board cells={board} onClick={handleClick}></Board>
      <Popup noti={winner} onClick={resetGame} />
      <div className="w-full">
        <Reset onClick={resetGame} />
      </div>
    </div>
  );
};

export default Game;
