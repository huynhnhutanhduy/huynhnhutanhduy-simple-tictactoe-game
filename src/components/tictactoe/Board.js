import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  return (
    <div className="w-[500px] h-[500px] mb-[50px] mx-auto grid grid-cols-3 grid-rows-3 gap-[25px]">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "text-red-500" : item === "O" ? "text-indigo-500" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
