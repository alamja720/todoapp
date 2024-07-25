// todo-input.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { actions } from '../../providers/todos.action';
import { todoSelector } from '../../providers/todos.reducer';
import { TodoModel } from '../../providers/todos.states';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
  imports: [FormsModule]
})
export class TodoInputComponent implements OnInit {
  todoInput?: string;
  dateInput?: string;
  timeInput?: string;
  todos?: TodoModel[];

  ngOnInit(): void {
    this.store.select(todoSelector).subscribe(state => this.todos = state);
  }

  constructor(private store: Store) {}

  addTodo() {
    if (this.todoInput!.length > 0) {
      this.store.dispatch(actions.addTodoAction({
        id: this.todos!.length,
        completed: false,
        title: this.todoInput!.trim(),
        date: this.dateInput!,
        time: this.timeInput!
      }));
      this.todoInput = '';
      this.dateInput = '';
      this.timeInput = '';
    }
  }
}
