import React, { useContext } from "react";
import css from "./Board.module.css";
import Card from "../Card/Card";
import { LIST_TYPES, LIST_COPY } from "../../config";
import { v4 as uuid } from "uuid";
import { Context } from "../../Context";

const Board = () => {
  const { tasks, setTasks } = useContext(Context);

  const addNewBacklogTask = (name, description) => {
    const task = {
      status: LIST_TYPES.BACKLOG,
      id: uuid(),
      name,
      description,
    };
    setTasks([...tasks, task]);
  };

  const replaceTasks = (name) => {
    const filteredTasks = tasks.filter((item) => item.name !== name);
    const deletedTask = tasks.find((item) => item.name === name);

    if (deletedTask.status === LIST_TYPES.BACKLOG) {
      const newTask = {
        status: LIST_TYPES.READY,
        id: deletedTask.id,
        name: deletedTask.name,
        description: deletedTask.description,
      };
      setTasks(filteredTasks, filteredTasks.push(newTask));
    }

    if (deletedTask.status === LIST_TYPES.READY) {
      const newTask = {
        status: LIST_TYPES.IN_PROGRESS,
        id: deletedTask.id,
        name: deletedTask.name,
        description: deletedTask.description,
      };
      setTasks(filteredTasks, filteredTasks.push(newTask));
    }

    if (deletedTask.status === LIST_TYPES.IN_PROGRESS) {
      const newTask = {
        status: LIST_TYPES.FINISHED,
        id: deletedTask.id,
        name: deletedTask.name,
        description: deletedTask.description,
      };
      setTasks(filteredTasks, filteredTasks.push(newTask));
    }
  };

  return (
    <div className={css.board}>
      {Object.values(LIST_TYPES).map((type) => {
        const listTasks = tasks.filter((task) => task.status === type);
        return (
          <Card
            key={LIST_COPY[type]}
            type={type}
            title={LIST_COPY[type]}
            listTasks={listTasks}
            addNewBacklogTask={addNewBacklogTask}
            replaceTasks={replaceTasks}
          />
        );
      })}
    </div>
  );
};

export default Board;
