import React from "react";

const Avatar = (props) => {
  return (
    <div
      className={`absolute w-[150px] h-auto ${
        props.turn
          ? "left-[150px] top-1/2 -translate-y-1/2"
          : "right-[150px] top-1/2 -translate-y-1/2"
      }`}
    >
      <span className="block w-full text-center mb-5 text-xl">
        Your turn is {props.turn ? "X" : "O"}
      </span>
      <img
        src="https://cdn.dribbble.com/userupload/2798814/file/original-3cfdbabadfd8f92aed97b0c0b57c6b89.png?compress=1&resize=752x"
        alt=""
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
};

export default Avatar;
