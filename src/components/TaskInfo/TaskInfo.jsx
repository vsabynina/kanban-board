import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import css from "./TaskInfo.module.css";
import Cross from "../../assets/cross.svg";
import Description from "../Description/Description";
import { Context } from "../../Context";

const TaskInfo = () => {
  const { tasks } = useContext(Context);

  let navigate = useNavigate();
  let { taskId } = useParams();
  const task = tasks.find((task) => task.id === taskId);

  return (
    <div className={css.task_info}>
      <div className={css.wrapper}>
        <h1 className={css.h1}>{task.name}</h1>
        <button className={css.button} onClick={() => navigate("/")}>
          <img src={Cross} alt="" />
        </button>
      </div>

      <Description description={task.description} taskId={taskId} />
    </div>
  );
};

export default TaskInfo;
