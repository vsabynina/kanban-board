import React, { useState } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/user.svg";
import ArrowDown from "../../assets/arrow-down.svg";
import ArrowUp from "../../assets/arrow-up.svg";

const Header = () => {
  const [selectIsShown, setSelectIsShown] = useState(false);

  const showSelect = () => {
    setSelectIsShown(!selectIsShown);
  };

  return (
    <header className={css.header}>
      <h1 className={css.title}>Awesome Kanban Board</h1>
      <div className={css.icon_wrapper}>
        <img className={css.logo} src={Logo} alt="" />
        <button className={css.button} onClick={showSelect}>
          {selectIsShown ? (
            <img src={ArrowUp} alt="" />
          ) : (
            <img src={ArrowDown} alt="" />
          )}
        </button>
        {selectIsShown ? (
          <select multiple size="2" className={css.select}>
            <option>Profile</option>
            <option>Log out</option>
          </select>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
