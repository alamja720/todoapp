import { createReducer, on } from '@ngrx/store';
import { actions } from './todos.action';
import { TodoModel } from './todos.states';

const initialState: TodoModel[] = JSON.parse(localStorage.getItem('todos') || '[]');

export const todoReducer = createReducer(
  initialState,
  on(actions.addTodoAction, (state, { id, title, completed, date }) => {
    return [...state, { id, title, completed, date }];
  }),
  on(actions.updateTodoAction, (state, { id, title, completed, date }) => {
    return state.map(todo => todo.id === id ? { ...todo, title, completed, date } : todo);
  }),
  on(actions.deleteTodoAction, (state, { id }) => {
    return state.filter(todo => todo.id !== id);
  })
);
