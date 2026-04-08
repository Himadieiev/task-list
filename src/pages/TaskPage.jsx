import {useEffect, useState} from "react";

import tasksAPI from "../api/tasksAPI";

const TaskPage = (props) => {
  const {params} = props;
  const taskId = params.id;

  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    tasksAPI
      .getById(taskId)
      .then((taskData) => {
        if (taskData?.error) {
          setHasError(true);
          return;
        }

        setTask(taskData);
        setHasError(false);
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (hasError) {
    return <h1>Task not found!</h1>;
  }

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.isDone ? "Task is completed" : "Task is not completed"}</p>
    </div>
  );
};

export default TaskPage;
