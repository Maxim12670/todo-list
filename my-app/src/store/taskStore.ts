import { create } from "zustand";
import { ITask, TFilterTask } from "../lib/types";
import { getTasksAsync } from "../service/api";

interface TaskStore {
  tasks: ITask[];
  filter: TFilterTask;
  setFilter: (filter: TFilterTask) => void;
  getTasks: () => Promise<void>;
  addNewTask: (title: string, description: string) => void;
  removeTask: (id: number) => void;
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

  addNewTask: (title, description) => set((state) => {
    const lengthTasks: number = state.tasks.length;
    const id = state.tasks[lengthTasks - 1].id + 1;
    const newTask: ITask = {
      id: id,
      attributes: {
        title, description, status: 'active'
      },
      favorite: 'notfavorite'
    };
    return { tasks: [...state.tasks, newTask] };
  }),

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
  changeFavorite: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) => (
        task.id === id ? { ...task, favorite: task.favorite == 'favorite' ? 'notfavorite' : 'favorite' } : task
      ))
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => (task.id !== id))
    })),
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