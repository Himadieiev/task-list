import {useContext, useState} from "react";

import Button from "./Button";
import Field from "./Field";
import {TasksContext} from "../context/TasksContext";

const AddTaskForm = () => {
  const {addTask, newTaskTitle, setNewTaskTitle, newTastInputRef} = useContext(TasksContext);

  const [error, setError] = useState("");

  const clearNewTaskTitle = newTaskTitle.trim();
  const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isNewTaskTitleEmpty) {
      addTask(clearNewTaskTitle);
    }
  };

  const onInput = (e) => {
    const {value} = e.target;
    const clearValue = value.trim();
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0;

    setNewTaskTitle(value);
    setError(hasOnlySpaces ? "The task cannot be empty" : "");
  };

  return (
    <form className="task__form" onSubmit={onSubmit}>
      <Field
        className="task__filed"
        label="New task title"
        id="new-task"
        value={newTaskTitle}
        error={error}
        onInput={onInput}
        ref={newTastInputRef}
      />
      <Button type="submit" isDisabled={isNewTaskTitleEmpty}>
        Add
      </Button>
    </form>
  );
};

export default AddTaskForm;
