import {useCallback, useEffect, useMemo, useRef, useState} from "react";

import useTasksLocalStorage from "./useTasksLocalStorage";

const useTasks = () => {
  const {savedTasks, saveTasks} = useTasksLocalStorage();

  const [tasks, setTasks] = useState(
    savedTasks ?? [
      {id: "task-1", title: "Task-1", isDone: false},
      {id: "task-2", title: "Task-2", isDone: true},
    ],
  );
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const newTastInputRef = useRef(null);

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm("Are you sure you want to delete all tasks?");

    if (isConfirmed) {
      setTasks([]);
    }
  }, []);

  const deleteTask = useCallback(
    (taskId) => {
      setTasks(tasks.filter(({id}) => id !== taskId));
    },
    [tasks],
  );

  const toggleTaskComplete = useCallback(
    (taskId, isDone) => {
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
    },
    [tasks],
  );

  const addTask = useCallback(() => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTaskTitle("");
      setSearchQuery("");
      newTastInputRef.current.focus();
    }
  }, [newTaskTitle]);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    newTastInputRef.current.focus();
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
