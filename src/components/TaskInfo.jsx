const TaskInfo = () => {
  return (
    <div className="task__info">
      <div className="task__total-tasks">
        Total tasks: <span>0</span>
      </div>
      <button className="task__delete-all-button" type="button">
        Delete all
      </button>
    </div>
  );
};

export default TaskInfo;
