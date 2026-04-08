import Task from "../components/Task";
import {TasksProvider} from "../context/TasksContext";

const TasksPage = () => {
  return (
    <TasksProvider>
      <Task />
    </TasksProvider>
  );
};

export default TasksPage;
