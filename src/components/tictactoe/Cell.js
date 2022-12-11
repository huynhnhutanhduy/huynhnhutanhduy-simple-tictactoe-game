import React from "react";

const Cell = (props) => {
  return (
    <div
      className={`cursor-pointer flex items-center justify-center font-bold text-[100px] shadow-3xl border-8 border-sky-300 ${props.className}`}
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
};

export default Cell;
