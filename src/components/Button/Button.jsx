import React from "react";
import css from "./Button.module.css";

const Button = ({ onClick, disabled }) => {
  return (
    <button
      className={`${css.button} ${disabled ? css.disabled : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      + Add card
    </button>
  );
};

export default Button;
