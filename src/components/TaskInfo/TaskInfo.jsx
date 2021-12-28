import React from "react";
import css from "./TaskInfo.module.css";
import Cross from "../../assets/cross.svg";

const TaskInfo = () => {
  return (
    <div className={css.task_info}>
      <div className={css.wrapper}>
        <h1>some title</h1>
        <img src={Cross} alt="" />
      </div>
      <p>some paragraph</p>
    </div>
  );
};

export default TaskInfo;
