import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { LIST_TYPES } from "./config";
import { Context } from "./Context";

function App() {
  const initialState = JSON.parse(window.localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const backlogTasks = tasks.filter(
    (task) => task.status === LIST_TYPES.BACKLOG
  );

  const readyTasks = tasks.filter((task) => task.status === LIST_TYPES.READY);

  const inProgressTasks = tasks.filter(
    (task) => task.status === LIST_TYPES.IN_PROGRESS
  );

  const finishedTasks = tasks.filter(
    (task) => task.status === LIST_TYPES.FINISHED
  );

  return (
    <Context.Provider
      value={{
        tasks,
        setTasks,
        backlogTasks,
        readyTasks,
        inProgressTasks,
        finishedTasks,
      }}
    >
      <div className="wrapper">
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
