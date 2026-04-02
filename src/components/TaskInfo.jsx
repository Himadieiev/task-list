import {memo, useContext, useMemo} from "react";

import {TasksContext} from "../context/TasksContext";

const TaskInfo = () => {
  const {tasks, deleteAllTasks} = useContext(TasksContext);

  const total = tasks.length;
  const hasTasks = total > 0;
  const done = useMemo(() => tasks.filter(({isDone}) => isDone).length, [tasks]);

  return (
    <div className="task__info">
      <div className="task__total-tasks">
        Total: {total} / Done: {done}
      </div>
      {hasTasks && (
        <button className="task__delete-all-button" type="button" onClick={deleteAllTasks}>
          Delete all
        </button>
      )}
    </div>
  );
};

export default memo(TaskInfo);
