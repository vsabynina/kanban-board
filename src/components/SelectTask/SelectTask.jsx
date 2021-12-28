import React from "react";
import css from "./SelectTask.module.css";
import { LIST_TYPES } from "../../config";

const SelectTask = ({ setIsFormShown, type, replaceTasks, selectedTasks }) => {
  const handleClick = (e) => {
    setIsFormShown((state) => !state);
    replaceTasks(e.target.value);
  };

  return (
    <select className={css.select} onChange={handleClick}>
      {type === LIST_TYPES.READY ? (
        <option hidden selected>
          Add tasks from backlog
        </option>
      ) : (
        ""
      )}

      {type === LIST_TYPES.IN_PROGRESS ? (
        <option hidden selected>
          Add tasks from ready
        </option>
      ) : (
        ""
      )}

      {type === LIST_TYPES.FINISHED ? (
        <option hidden selected>
          Add tasks from in progress
        </option>
      ) : (
        ""
      )}

      {selectedTasks.length
        ? selectedTasks.map((task, index) => {
            return <option key={index}>{task.name}</option>;
          })
        : ""}
    </select>
  );
};

export default SelectTask;
