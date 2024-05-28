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
}

export type TFilterTask = 'all' | 'active' | 'completed' | 'favorite' | 'notfavorite';