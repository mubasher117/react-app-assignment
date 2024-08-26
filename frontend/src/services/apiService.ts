import axios, { AxiosResponse } from 'axios';

export const BASE_URL = 'http://127.0.0.1:8000/api';


interface Task {
    id: number;
    text: string;
    completed: boolean;
}

class TodoAPI {
    static getTasks(): Promise<AxiosResponse<Task[]>> {
        return axios.get<Task[]>(`${BASE_URL}/tasks`);
    }

    static createTask(taskData: Omit<Task, 'id'>): Promise<AxiosResponse<Task>> {
        return axios.post<Task>(`${BASE_URL}/tasks/`, taskData);
    }

    static updateTask(taskId: number, taskData: Task): Promise<AxiosResponse<Task>> {
        return axios.put<Task>(`${BASE_URL}/tasks/${taskId}/`, taskData);
    }

    static deleteTask(taskId: number): Promise<AxiosResponse<void>> {
        return axios.delete<void>(`${BASE_URL}/tasks/${taskId}/`);
    }
}

export default TodoAPI;