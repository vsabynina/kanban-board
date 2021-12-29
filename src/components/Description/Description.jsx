import React from "react";
import css from "./Description.module.css";

const Description = ({ description, tasks, setTasks, taskId }) => {
  const handleChange = (value) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, description: value };
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
