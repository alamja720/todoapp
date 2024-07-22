import { createAction, props } from '@ngrx/store';
import { TodoModel } from './todos.states';

export const addTodoAction = createAction(
  '[TODO] ADD_TODO',
  props<{ id: number; title: string; completed: boolean }>()
);

export const updateTodoAction = createAction(
  '[TODO] UPDATE_TODO',
  props<{ id: number; title: string; completed: boolean }>()
);

export const deleteTodoAction = createAction(
  '[TODO] DELETE_TODO',
  props<{ id: number; title: string; completed: boolean }>()
);

export const actions = { addTodoAction, deleteTodoAction, updateTodoAction };
