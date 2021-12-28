import React from "react";
import css from "./Footer.module.css";

const Footer = ({ finishedTasks, backlogTasks }) => {
  return (
    <footer className={css.footer}>
      <div className={css.title_wrapper}>
        <h1 className={`${css.title} ${css.title_margin}`}>
          Active tasks: {backlogTasks.length}
        </h1>
        <h1 className={css.title}>Finished tasks: {finishedTasks.length}</h1>
      </div>
      <h1 className={css.title}>Kanban board by @vsabynina, 2021</h1>
    </footer>
  );
};

export default Footer;
