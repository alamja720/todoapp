import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoInputComponent } from "./components/todo-input/todo-input.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { actions } from './providers/todos.action';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, TodoInputComponent, TodoListComponent]
})
export class AppComponent {
  title = 'todo-app';

}
