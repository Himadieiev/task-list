const TaskInfo = (props) => {
  const {total, done} = props;

  const hasTasks = total > 0;

  return (
    <div className="task__info">
      <div className="task__total-tasks">
        Total: {total} / Done: {done}
      </div>
      {hasTasks && (
        <button className="task__delete-all-button" type="button">
          Delete all
        </button>
      )}
    </div>
  );
};

export default TaskInfo;
