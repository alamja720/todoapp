export interface TodoModel {
  id: number;
  title: string;
  completed: boolean;
  date: string;
}

export let todos: TodoModel[] = [
];
