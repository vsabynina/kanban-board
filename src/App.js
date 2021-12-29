import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { LIST_TYPES } from "./config";

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
    <div className="wrapper">
      <Router>
        <Header />
        <Main
          tasks={tasks}
          setTasks={setTasks}
          backlogTasks={backlogTasks}
          readyTasks={readyTasks}
          inProgressTasks={inProgressTasks}
        />
        <Footer backlogTasks={backlogTasks} finishedTasks={finishedTasks} />
      </Router>
    </div>
  );
}

export default App;
