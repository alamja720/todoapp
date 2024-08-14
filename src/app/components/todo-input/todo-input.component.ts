import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  todos?: TodoModel[];
  showCompletedOnly: boolean = false;

  @Output() filterChanged = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.store.select(todoSelector).subscribe(state => this.todos = state);
  }

  constructor(private store: Store) {}

  addTodo() {
    if (this.todoInput!.length > 0) {
      this.store.dispatch(actions.addTodoAction({
        id: this.todos!.length + 1,
        completed: false,
        title: this.todoInput!.trim(),
        date: this.dateInput!,
      }));
      this.todoInput = '';
      this.dateInput = '';
    }
  }

  toggleFilter() {
    this.showCompletedOnly = !this.showCompletedOnly;
    this.filterChanged.emit(this.showCompletedOnly);
  }
}
