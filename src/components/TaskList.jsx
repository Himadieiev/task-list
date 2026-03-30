import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const {tasks = [], filteredTasks, onDeleteTaskButtonClick, onTaskCompleteChange} = props;

  const hasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;

  if (!hasTasks) {
    return <div className="task__empty-message">There are no tasks yet.</div>;
  }

  if (hasTasks && isEmptyFilteredTasks) {
    return <div className="task__empty-message">Tasks not found.</div>;
  }

  return (
    <ul className="task__list">
      {(filteredTasks ?? tasks).map((task) => (
        <TaskItem
          className="task__item"
          key={task.id}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
          {...task}
        />
      ))}
    </ul>
  );
};

export default TaskList;
