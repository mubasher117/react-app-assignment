import React, { useCallback, useEffect } from "react";
import TodoItem from "../todoItem/TodoItem.tsx";
import "./TodoList.css";
import { Todo } from "./TodoList.type.tsx";
import AddTodo from "../addTodo/AddTodo.tsx";
import TodoAPI from "../../services/apiService.ts";

function TodoList() {
  const [tasks, setTasks] = React.useState<Array<Todo>>([]);
  const [newTask, setNewTask] = React.useState("");
  console.log(tasks);

  const fetchTasks = async () => {
    const tasksList = await TodoAPI.getTasks();
    setTasks(tasksList.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleTaskCompletion = useCallback(
    async (id, text) => {
      await TodoAPI.updateTask(id, {
        text,
        done: true,
      });
      fetchTasks();
    },
    [tasks]
  );

  const handleTaskDeletion = useCallback(
    async (id) => {
      await TodoAPI.deleteTask(id);
      fetchTasks();
    },
    [tasks]
  );

  return (
    <div className="todo-list">
      <div className="todo-header">
        <h1>TODO List</h1>
        <AddTodo
          newTask={newTask}
          setNewTask={setNewTask}
          fetchTasks={fetchTasks}
        />
      </div>
      <div className="todo-items">
        {tasks.length === 0 ? (
          <div className="no-tasks-message">
            <p>No tasks yet. Add a new task to get started!</p>
          </div>
        ) : (
          tasks.map((task, index) => (
            <TodoItem
              task={task}
              key={index}
              handleTaskDeletion={handleTaskDeletion}
              handleTaskCompletion={handleTaskCompletion}
              index={index}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;
