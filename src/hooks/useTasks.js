import {useCallback, useEffect, useMemo, useRef, useState} from "react";

import tasksAPI from "../api/tasksAPI";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const newTastInputRef = useRef(null);

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm("Are you sure you want to delete all tasks?");

    if (isConfirmed) {
      tasksAPI.deleteAll(tasks).then(() => {
        setTasks([]);
      });
    }
  }, [tasks]);

  const deleteTask = useCallback(
    (taskId) => {
      tasksAPI.delete(taskId).then(() => {
        setTasks(tasks.filter(({id}) => id !== taskId));
      });
    },
    [tasks],
  );

  const toggleTaskComplete = useCallback(
    (taskId, isDone) => {
      tasksAPI.toggleComplete(taskId, isDone).then(() => {
        setTasks(
          tasks.map((task) =>
            task.id === taskId
              ? {
                  ...task,
                  isDone,
                }
              : task,
          ),
        );
      });
    },
    [tasks],
  );

  const addTask = useCallback((title) => {
    const newTask = {
      title,
      isDone: false,
    };

    tasksAPI.add(newTask).then((addedTask) => {
      setTasks((prevTasks) => [...prevTasks, addedTask]);
      setNewTaskTitle("");
      setSearchQuery("");
      newTastInputRef.current.focus();
    });
  }, []);

  useEffect(() => {
    newTastInputRef.current.focus();

    tasksAPI.getAll().then(setTasks);
  }, []);

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLocaleLowerCase();

    return clearSearchQuery.length > 0
      ? tasks.filter(({title}) => title.toLocaleLowerCase().includes(clearSearchQuery))
      : null;
  }, [searchQuery, tasks]);

  return {
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    newTaskTitle,
    setNewTaskTitle,
    searchQuery,
    setSearchQuery,
    newTastInputRef,
    addTask,
  };
};

export default useTasks;
