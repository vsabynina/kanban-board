import React from "react";
import { Routes, Route } from "react-router-dom";
import css from "./Main.module.css";
import Board from "../Board/Board";
import TaskInfo from "../TaskInfo/TaskInfo";
import ErrorPage from "../ErrorPage/ErrorPage";

const Main = () => {
  return (
    <main className={css.main}>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/tasks/:taskId" element={<TaskInfo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
};

export default Main;
