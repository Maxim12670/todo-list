export interface ITaskAttributes {
  title: string;
  description: string;
  status: string
}

export interface ITask {
  id: number;
  attributes: ITaskAttributes
  favorite?: string;
}

export interface ITaskList {
  tasks: ITask[];
  onChangeFavorite: (id: number) => void;
  onChangeStatus: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export type TFilterTask = 'all' | 'active' | 'completed' | 'favorite' | 'notfavorite';