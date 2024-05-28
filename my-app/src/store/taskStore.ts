import { create } from "zustand";
import { ITask, TFilterTask } from "../lib/types";
import { deleteTaskAsync, getTasksAsync, postTaskAsync } from "../service/api";

interface TaskStore {
  tasks: ITask[];
  filter: TFilterTask;
  setFilter: (filter: TFilterTask) => void;
  getTasks: () => Promise<void>;
  addNewTask: (title: string, description: string, status: string) => Promise<void>;
  removeTask: (id: number) => Promise<void>;
  changeStatus: (id: number) => void;
  changeFavorite: (id: number) => void;
  getFilteredTasks: () => ITask[];
}



export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  filter: 'all',
  setFilter: (filter) => set({ filter }),
  getTasks: async () => {
    try {
      const tasks = await getTasksAsync();
      set({ tasks });
    } catch (error) {
      console.log('Ошибка в сторе при получении задач:', error);
    }
  },

  addNewTask: async (title, description, status) => {
    try {
      await postTaskAsync(title, description, status);
      const { getTasks } = useTaskStore.getState();
      getTasks();
    } catch (error) {
      console.log('Ошибка в сторе при отправке задачи:', error);
    }
  },

  changeStatus: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) => (
        task.id === id ? {
          ...task, favorite: task.favorite,
          attributes: {
            ...task.attributes,
            status: task.attributes.status == 'active' ? 'completed' : 'active'
          }
        } : task
      ))
    })),
  changeFavorite: (id: number) =>
    set((state) => ({
      tasks: state.tasks.map((task) => (
        task.id === id ? { ...task, favorite: task.favorite == 'favorite' ? 'notfavorite' : 'favorite' } : task
      ))
    })),
  removeTask: async (id: number) => {
    try {
      await deleteTaskAsync(id);
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id)
      }))
    } catch (error) {
      console.log('Произошла ошибка в сторе при удалении задачи:', error);
    }
  },
  getFilteredTasks: () => {
    const { tasks, filter } = get();
    switch (filter) {
      case 'active':
        return tasks.filter((task) => task.attributes.status === 'active');
      case 'completed':
        return tasks.filter((task) => task.attributes.status === 'completed');
      case 'favorite':
        return tasks.filter((task) => task.favorite === 'favorite');
      case 'notfavorite':
        return tasks.filter((task) => task.favorite === 'notfavorite');
      case 'all':
      default:
        return tasks;
    }
  },

}));