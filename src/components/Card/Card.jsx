import React, { useState, useContext } from "react";
import css from "./Card.module.css";
import { Link } from "react-router-dom";
import { LIST_TYPES } from "../../config";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import SelectTask from "../SelectTask/SelectTask";
import Button from "../Button/Button";
import { Context } from "../../Context";

const Card = ({ type, title, listTasks, addNewBacklogTask, replaceTasks }) => {
  const { backlogTasks, readyTasks, inProgressTasks } = useContext(Context);

  const [isFormShown, setIsFormShown] = useState(false);

  const handleButtonClick = () => {
    setIsFormShown((state) => !state);
  };

  const [disabled, setDisabled] = useState(false);

  return (
    <div className={css.card}>
      <h1 className={css.title}>{title}</h1>
      <div className={css.cards_wrapper}>
        {listTasks.length ? (
          listTasks.map((task) => (
            <Link
              to={`/tasks/${task.id}`}
              key={task.id}
              className={css.taskLink}
            >
              <div className={css.task} key={task.id}>
                {task.name}
              </div>
            </Link>
          ))
        ) : (
          <p className={css.p}>No tasks added yet</p>
        )}
      </div>

      {LIST_TYPES.BACKLOG === type && !isFormShown && (
        <Button onClick={handleButtonClick} />
      )}

      {LIST_TYPES.READY === type && !isFormShown && (
        <Button
          selectedTasks={backlogTasks}
          onClick={handleButtonClick}
          disabled={backlogTasks.length === 0 ? !disabled : disabled}
        />
      )}

      {LIST_TYPES.IN_PROGRESS === type && !isFormShown && (
        <Button
          selectedTasks={readyTasks}
          onClick={handleButtonClick}
          disabled={readyTasks.length === 0 ? !disabled : disabled}
        />
      )}

      {LIST_TYPES.FINISHED === type && !isFormShown && (
        <Button
          selectedTasks={inProgressTasks}
          onClick={handleButtonClick}
          disabled={inProgressTasks.length === 0 ? !disabled : disabled}
        />
      )}

      {LIST_TYPES.BACKLOG === type && isFormShown && (
        <AddTaskForm
          addNewBacklogTask={addNewBacklogTask}
          setIsFormShown={setIsFormShown}
        />
      )}

      {LIST_TYPES.READY === type && isFormShown && (
        <SelectTask
          setIsFormShown={setIsFormShown}
          type={type}
          replaceTasks={replaceTasks}
          selectedTasks={backlogTasks}
        />
      )}

      {LIST_TYPES.IN_PROGRESS === type && isFormShown && (
        <SelectTask
          setIsFormShown={setIsFormShown}
          type={type}
          replaceTasks={replaceTasks}
          selectedTasks={readyTasks}
        />
      )}

      {LIST_TYPES.FINISHED === type && isFormShown && (
        <SelectTask
          setIsFormShown={setIsFormShown}
          type={type}
          replaceTasks={replaceTasks}
          selectedTasks={inProgressTasks}
        />
      )}
    </div>
  );
};

export default Card;
