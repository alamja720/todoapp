import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { actions } from './todos.action';
import { TodoModel } from './todos.states';

@Injectable()
export class TodoEffects {

  constructor(private actions$: Actions) {}

  saveTodosToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.addTodoAction, actions.updateTodoAction, actions.deleteTodoAction),
        tap((action) => {
          const todos = JSON.parse(localStorage.getItem('todos') || '[]') as TodoModel[];
          let updatedTodos;

          switch (action.type) {
            case '[TODO] ADD_TODO':
              updatedTodos = [...todos, { id: action.id, title: action.title, completed: action.completed, date: action.date }];
              break;
            case '[TODO] UPDATE_TODO':
              updatedTodos = todos.map(todo => todo.id === action.id ? { ...todo, title: action.title, completed: action.completed, date: action.date } : todo);
              break;
            case '[TODO] DELETE_TODO':
              updatedTodos = todos.filter(todo => todo.id !== action.id);
              break;
            default:
              return;
          }

          localStorage.setItem('todos', JSON.stringify(updatedTodos));
        })
      ),
    { dispatch: false }
  );
}
