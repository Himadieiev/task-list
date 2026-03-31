import Button from "./Button";
import Field from "./Field";

const AddTaskForm = (props) => {
  const {addTask, newTaskTitle, setNewTaskTitle, newTastInputRef} = props;

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
