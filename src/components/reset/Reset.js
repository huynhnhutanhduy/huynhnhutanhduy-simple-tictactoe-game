import React from "react";

const Reset = (props) => {
  return (
    <div>
      <button
        className="block px-5 py-3 mx-auto bg-cyan-500 text-white border-none outline-none text-base rounded-xl"
        onClick={props.onClick}
      >
        Reset
      </button>
    </div>
  );
};

export default Reset;
