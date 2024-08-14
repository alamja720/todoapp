import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
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

// Selector to get all todos
export const todoSelector = createSelector(
  createFeatureSelector<TodoModel[]>('todos'),
  (todos) => todos
);

// Selector to get todos ordered by expiration date
export const selectTodosOrderedByDate = createSelector(
  createFeatureSelector<TodoModel[]>('todos'),
  (todos) => todos.slice().sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateA - dateB;  // Sort in ascending order (earliest first)
  })
);
