import TaskPage from "./pages/TaskPage";
import TasksPage from "./pages/TasksPage";
import Router from "./Router";

const App = () => {
  const routes = {
    "/": TasksPage,
    "/tasks/:id": TaskPage,
    "*": () => <h1>404 Page not found</h1>,
  };

  return <Router routes={routes} />;
};

export default App;
