import Button from "./Button";
import Field from "./Field";

const AddTaskForm = (props) => {
  const {addTask} = props;

  const onSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  return (
    <form className="task__form" onSubmit={onSubmit}>
      <Field className="task__filed" label="New task title" id="new-task" />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTaskForm;
