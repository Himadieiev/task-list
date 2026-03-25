import Button from "./Button";
import Field from "./Field";

const AddTaskForm = () => {
  return (
    <form className="task__form">
      <Field className="task__filed" label="New task title" id="new-task" />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTaskForm;
