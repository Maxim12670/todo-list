import axios from "axios";
import { ITask } from "../lib/types";

const baseURL = 'https://cms.dev-land.host/api';

const apiRoutes = {
  getTask: '/tasks',
  postTask: '/tasks',
  deleteTask: '/tasks'
};

export const getTasksAsync = async () => {

  const res = await axios.get(`${baseURL}${apiRoutes.getTask}`);
  if (Array.isArray(res.data.data)) {
    return res.data.data.map((task: ITask) => ({
      ...task,
      favorite: 'notfavorite'
    }));
  } else {
    throw new Error('Ошибка при получении задач!');
  }
};

export const postTaskAsync = async (title: string, description: string, status: string) => {

  try {
    await axios.post(`${baseURL}${apiRoutes.postTask}`, {
      data: {
        title: title,
        description: description,
        status: status
      }
    });
    const newTask = {
      attributes: {
        title: title,
        description: description,
        status: status
      }
    }
    return newTask;
  } catch (error) {
    console.log('Произошла ошибка при отправки задачи', error);
  }
};

export const deleteTaskAsync = async (id: number) => {
  try {
    await axios.delete(`${baseURL}${apiRoutes.deleteTask}/${id}`);

  } catch (error) {
    console.log('Произошла ошибка при удалении задачи:', error);
  }
}