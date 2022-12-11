import React from "react";
import Close from "../close/Close";
import Reset from "../reset/Reset";

const Popup = (props) => {
  const handleClose = (e) => {
    let popup = document.getElementById("popup");
    let popupContent = document.getElementById("popup-content");
    let toggle = document.getElementById("toggle");
    let btn = document.getElementById("btn");
    if (
      toggle.contains(e.target) ||
      btn.contains(e.target) ||
      (!popupContent.contains(e.target) && popup.contains(e.target))
    )
      popup.classList.add("hidden");
  };
  return (
    <div>
      {props.noti && (
        <div
          className="fixed z-10 left-0 top-0 w-full h-full bg-gray-popup flex items-center justify-center"
          id="popup"
          onClick={handleClose}
        >
          <div
            className="w-[400px] h-[350px] bg-white rounded-3xl relative"
            id="popup-content"
          >
            <span
              className="cursor-pointer text-gray-500 absolute top-0 right-5 text-[50px]"
              onClick={handleClose}
              id="toggle"
            >
              &times;
            </span>
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full">
              <span className="block font-bold text-xl w-full text-center">
                Congratulations!
              </span>
              <p className="text-center mt-5 w-full">Winner is {props.noti}</p>
              <p className="text-center mt-5 w-full">Press Reset to restart your game</p>
            </div>
            <div className="w-full flex justify-evenly absolute bottom-5">
              <Reset onClick={props.onClick} />
              <div id="btn">
                <Close onClick={handleClose} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
