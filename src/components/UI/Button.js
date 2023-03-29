import React from "react";
import { BsFillBookmarkStarFill } from "react-icons/bs";

const Button = () => {
  return (
    <>
      <button className="btns">
        <span>
          <BsFillBookmarkStarFill />
        </span>
        Get Ticket
      </button>
    </>
  );
};

export default Button;
