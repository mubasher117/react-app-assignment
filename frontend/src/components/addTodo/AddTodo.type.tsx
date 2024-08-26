export interface AddTodoProps {
  newTask: string;
  setNewTask: (newTask: string) => void;
  fetchTasks: () => void;
}
