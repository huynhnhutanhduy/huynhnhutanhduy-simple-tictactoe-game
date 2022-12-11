import React from "react";

const Close = (props) => {
  return (
    <div>
      <button
        className="block px-5 py-3 mx-auto bg-red-600 text-white border-none outline-none text-base rounded-xl"
        onClick={props.onClick}
      >
        Close
      </button>
    </div>
  );
};

export default Close;
