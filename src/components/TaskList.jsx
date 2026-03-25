import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const {tasks = []} = props;

  const hasTasks = true;

  if (!hasTasks) {
    return <div className="task__empty-message"></div>;
  }

  return (
    <ul className="task__list">
      {tasks.map((task) => (
        <TaskItem className="task__item" key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
