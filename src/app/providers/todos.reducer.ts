import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { actions } from './todos.action';
import { TodoModel, todos } from './todos.states';

const initialState = JSON.parse(localStorage.getItem('todos') || '[]');

export const todoReducer = createReducer(
  initialState,
  on(actions.addTodoAction, (state, { id, title, completed, date, time }) => {
    const newState = [...state, { id, title, completed, date, time }];
    localStorage.setItem('todos', JSON.stringify(newState));
    return newState;
  }),
  on(actions.updateTodoAction, (state, { id, title, completed, date, time }) => {
    let tempTodoIndex = state.findIndex((t: TodoModel) => t.id === id);
    var tempStates = [...state];
    if (tempTodoIndex != -1) {
      tempStates[tempTodoIndex] = { id, title, completed, date, time };
    }
    localStorage.setItem('todos', JSON.stringify(tempStates));
    return tempStates;
  }),
  on(actions.deleteTodoAction, (state, { id }) => {
    const newState = state.filter((t: TodoModel) => t.id !== id);
    localStorage.setItem('todos', JSON.stringify(newState));
    return newState;
  })
);

export const todoSelector = createSelector(
  createFeatureSelector<TodoModel[]>('todos'),
  (todos) => todos
);
