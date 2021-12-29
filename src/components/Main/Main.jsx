import React from "react";
import { Routes, Route } from "react-router-dom";
import css from "./Main.module.css";
import Board from "../Board/Board";
import TaskInfo from "../TaskInfo/TaskInfo";
import ErrorPage from "../ErrorPage/ErrorPage";

const Main = ({
  tasks,
  setTasks,
  backlogTasks,
  readyTasks,
  inProgressTasks,
}) => {
  return (
    <main className={css.main}>
      <Routes>
        <Route
          path="/"
          element={
            <Board
              tasks={tasks}
              setTasks={setTasks}
              backlogTasks={backlogTasks}
              readyTasks={readyTasks}
              inProgressTasks={inProgressTasks}
            />
          }
        />

        <Route
          path="/tasks/:taskId"
          element={<TaskInfo tasks={tasks} setTasks={setTasks} />}
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
};

export default Main;
