import React from "react";
import css from "./Main.module.css";
import Board from "../Board/Board";

const Main = ({
  tasks,
  setTasks,
  backlogTasks,
  readyTasks,
  inProgressTasks,
}) => {
  return (
    <main className={css.main}>
      <Board
        tasks={tasks}
        setTasks={setTasks}
        backlogTasks={backlogTasks}
        readyTasks={readyTasks}
        inProgressTasks={inProgressTasks}
      />
    </main>
  );
};

export default Main;
