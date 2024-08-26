import React from "react";
import { AddTodoProps } from "./AddTodo.type";
import TodoAPI from "../../services/apiService.ts";

function AddTodo({ newTask, setNewTask, fetchTasks }: AddTodoProps) {
  const handleAddTask = async () => {
    if (!newTask) return;
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10);

    await TodoAPI.createTask({
      created_at: formattedDate,
      text: newTask,
      done: false,
    });
    fetchTasks();
    setNewTask("");
  };

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTask();
          }
        }}
      />
      <button onClick={handleAddTask}>+</button>
    </div>
  );
}
export default AddTodo;
