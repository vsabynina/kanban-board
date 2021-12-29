import React, {useContext} from "react";
import css from "./Description.module.css";
import {Context} from "../../Context";

const Description = ({description, taskId}) => {
  const {tasks, setTasks} = useContext(Context);

  const handleChange = (value) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {...task, description: value};
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
      <textarea
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          value={!description ? "This task has no description" : description}
          className={css.textarea}
      />
  );
};

export default Description;
