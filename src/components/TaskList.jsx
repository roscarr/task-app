import { useContext, useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { TaskContest } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContest);
  if (tasks.length == 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        no hay tareas
      </h1>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TaskList;
