import { Todo } from "../todoList/TodoList.type";

export interface TodoItemProps {
  task: Todo;
  handleTaskDeletion: (index: number) => void;
  handleTaskCompletion: (index: number) => void;
}
