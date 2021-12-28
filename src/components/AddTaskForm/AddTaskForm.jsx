import React, { useState } from "react";
import css from "./AddTaskForm.module.css";

const AddTaskForm = ({ addNewBacklogTask, setIsFormShown }) => {
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.title) {
      addNewBacklogTask(values.title, values.description);
    }
    setIsFormShown((state) => !state);
  };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    setValues({ ...values, [fieldName]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          className={css.input}
          name={"title"}
          placeholder={"Enter task title"}
          type="text"
          onChange={handleChange}
          value={values.title}
        />
        <textarea
          className={`${css.input} ${css.text_area}`}
          name={"description"}
          placeholder={"Enter task description"}
          onChange={handleChange}
          value={values.description}
        />
        <button className={css.button} type={"submit"}>
          Submit
        </button>
      </div>
    </form>
  );
};
export default AddTaskForm;
