import { createContext, useState, useEffect } from "react";

import { tasks as data } from "../data/tasks";
export const TaskContest = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <TaskContest.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContest.Provider>
  );
}
