import TaskItem from "./TaskItem";

const TaskList = () => {
  const hasTasks = true;

  if (!hasTasks) {
    return <div className="task__empty-message"></div>;
  }

  return (
    <ul className="task__list">
      <TaskItem />
      <li className="task__item task-item">
        <input className="task-item__checkbox" id="task-2" type="checkbox" />
        <label className="task-item__label" htmlFor="task-2">
          Task 2
        </label>
        <button className="task-item__delete-button" aria-label="Delete" title="Delete">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 5L5 15M5 5L15 15"
              stroke="#757575"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default TaskList;
