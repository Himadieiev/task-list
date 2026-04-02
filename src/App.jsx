import Task from "./components/Task";
import {TasksProvider} from "./context/TasksContext";

const App = () => {
  return (
    <TasksProvider>
      <Task />
    </TasksProvider>
  );
};

export default App;
