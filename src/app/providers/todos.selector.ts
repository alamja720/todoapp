import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoModel } from './todos.states';

const selectTodosState = createFeatureSelector<TodoModel[]>('todos');

export const selectAllTodos = createSelector(
  selectTodosState,
  (todos) => todos
);

export const selectTodosOrderedByDate = createSelector(
  selectTodosState,
  (todos) => todos.slice().sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateA - dateB; 
  })
);

export const selectCompletedTodos = createSelector(
  selectTodosState,
  (todos) => todos.filter(todo => todo.completed)
);

export const selectIncompleteTodos = createSelector(
  selectTodosState,
  (todos) => todos.filter(todo => !todo.completed)
);
