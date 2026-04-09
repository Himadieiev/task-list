import {useContext} from "react";

import AddTaskForm from "../AddTaskForm/AddTaskForm";
import SearchTaskForm from "../SearchTaskForm/SearchTaskForm";
import TaskInfo from "../TaskInfo/TaskInfo";
import TaskList from "../TaskList/TaskList";
import Button from "../Button/Button";
import {TasksContext} from "../../context/TasksContext";
import styles from "./Task.module.scss";

const Task = () => {
  const {firstIncompleteTaskRef} = useContext(TasksContext);

  return (
    <div className={styles.task}>
      <div className={styles.titleWrapper}>
        <svg className={styles.titleIcon} viewBox="0 0 512 512">
          <path
            fill="var(--color-black)"
            d="M222.085,235.644l-62.01-62.01L81.8,251.905l62.009,62.01-.04.04,66.958,66.957,11.354,11.275.04.039,66.957-66.957,11.273-11.354L502.628,111.644,424.356,33.373Zm44.33,66.958-11.274,11.353h0l-33.057,33.056-.04-.039-33.017-33.017.04-.04-62.009-62.01,33.016-33.016,62.01,62.009L424.356,78.627l33.017,33.017Z"
          />
          <polygon
            fill="var(--color-black)"
            points="448 464 48 464 48 64 348.22 64 380.22 32 16 32 16 496 480 496 480 179.095 448 211.095 448 464"
          />
        </svg>
        <h1 className={styles.title}>Task List</h1>
      </div>
      <AddTaskForm styles={styles} />
      <SearchTaskForm styles={styles} />
      <TaskInfo styles={styles} />
      <Button onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({behavior: "smooth"})}>
        Show first incomplete task
      </Button>
      <TaskList styles={styles} />
    </div>
  );
};

export default Task;
