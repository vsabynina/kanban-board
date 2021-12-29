import React from "react";
import css from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={css.error_page}>
      <p className={css.p}>ERROR! PAGE NOT FOUND</p>
    </div>
  );
};

export default ErrorPage;
