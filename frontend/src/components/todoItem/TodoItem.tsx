import React from "react";
import { TodoItemProps } from "./TodoItem.type";

function TodoItem({
  task,
  handleTaskDeletion,
  handleTaskCompletion,
}: TodoItemProps) {
  return (
    <div className={`todo-item ${task.done ? "completed" : ""}`}>
      <div className="task-text">{task.text}</div>
      <div className="task-actions">
        <button
          className="complete-btn"
          onClick={() => handleTaskCompletion(task.id, task.text)}
        >
          {task.done ? "✓" : "◯"}
        </button>
        <button
          className="delete-btn"
          onClick={() => handleTaskDeletion(task.id)}
        >
          ×
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
