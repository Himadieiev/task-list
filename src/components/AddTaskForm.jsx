import {useContext} from "react";

import Button from "./Button";
import Field from "./Field";
import {TasksContext} from "../context/TasksContext";

const AddTaskForm = () => {
  const {addTask, newTaskTitle, setNewTaskTitle, newTastInputRef} = useContext(TasksContext);

  const onSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  return (
    <form className="task__form" onSubmit={onSubmit}>
      <Field
        className="task__filed"
        label="New task title"
        id="new-task"
        value={newTaskTitle}
        onInput={(e) => setNewTaskTitle(e.target.value)}
        ref={newTastInputRef}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTaskForm;
