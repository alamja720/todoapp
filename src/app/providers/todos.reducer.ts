import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { actions } from './todos.action';
import { TodoModel, todos } from './todos.states';

export const todoReducer = createReducer(
  todos,
  on(actions.addTodoAction, (state, { id, title, completed }) => {
    return [{ id, title, completed }, ...state];
  }),
  on(actions.updateTodoAction, (state, { id, title, completed }) => {
    let tempTodoIndex = state.findIndex((t) => t.id == id);
    var tempStates = [...state];
    if (tempTodoIndex != -1) {
      tempStates[tempTodoIndex] = { id, title, completed };
    }
    return [...tempStates];
  }),
  on(actions.deleteTodoAction, (state, { id }) => {
    return state.filter((t) => t.id !== id);
  })
);

export const todoSelector = createSelector(
  createFeatureSelector<TodoModel[]>('todos'),
  (todos) => todos
);
