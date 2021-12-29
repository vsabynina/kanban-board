import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import css from "./TaskInfo.module.css";
import Cross from "../../assets/cross.svg";
import Description from "../Description/Description";

const TaskInfo = ({ tasks, setTasks }) => {
  let navigate = useNavigate();
  let { taskId } = useParams();
  const task = tasks.find((task) => task.id === taskId);

  // const handleChange = (e) => {
  //     const newStatus = e.target.value
  //     const updatedTasks = tasks.map(task => {
  //         if (task.id === taskId) {
  //             return {...task, status: newStatus}
  //         }
  //         return task
  //     })
  //     setTasks(updatedTasks)
  // }

  return (
    <div className={css.task_info}>
      <div className={css.wrapper}>
        <h1 className={css.h1}>{task.name}</h1>
        <button className={css.button} onClick={() => navigate("/")}>
          <img src={Cross} alt="" />
        </button>
      </div>

      <Description
        description={task.description}
        tasks={tasks}
        setTasks={setTasks}
        taskId={taskId}
      />
    </div>
  );
};

export default TaskInfo;
