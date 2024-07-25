export interface TodoModel {
  id: number;
  title: string;
  completed: boolean;
  date: string;
  time: string;
}

export let todos: TodoModel[] = [
  {
    id: 1,
    completed: false,
    title: 'hello',
    date: '2023-07-20',
    time: '10:00'
  },
  {
    id: 2,
    completed: true,
    title: 'hi',
    date: '2023-07-21',
    time: '11:00'
  },
];
