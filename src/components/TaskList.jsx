import {memo} from "react";

import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const {
    tasks = [],
    filteredTasks,
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
  } = props;

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
          ref={task.id === firstIncompleteTaskId ? firstIncompleteTaskRef : null}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
          {...task}
        />
      ))}
    </ul>
  );
};

export default memo(TaskList);
