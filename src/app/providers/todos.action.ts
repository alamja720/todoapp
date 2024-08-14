import { createAction, props } from '@ngrx/store';

export const addTodoAction = createAction(
  '[TODO] ADD_TODO',
  props<{ id: number; title: string; completed: boolean; date: string }>()
);

export const updateTodoAction = createAction(
  '[TODO] UPDATE_TODO',
  props<{ id: number; title: string; completed: boolean; date: string }>()
);

export const deleteTodoAction = createAction(
  '[TODO] DELETE_TODO',
  props<{ id: number; title: string; completed: boolean; date: string }>()
);

export const actions = { addTodoAction, updateTodoAction, deleteTodoAction };