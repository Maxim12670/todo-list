import axios from "axios";
import { ITask } from "../lib/types";

const baseURL = 'https://cms.dev-land.host/api';

const apiRoutes = {
  getTasks: '/tasks'
};

export const getTasksAsync = async (): Promise<ITask[]> => {

  const res = await axios.get(`${baseURL}${apiRoutes.getTasks}`);
  if (Array.isArray(res.data.data)) {
    return res.data.data.map((task: ITask) => ({
      ...task,
      favorite: 'notfavorite'
    }));
  } else {
    throw new Error('Ошибка при получении задач!');
  }
};