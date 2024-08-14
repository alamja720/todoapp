import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { todoSelector } from '../../providers/todos.reducer';
import { TodoModel } from '../../providers/todos.states';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [TodoItemComponent, CommonModule, FormsModule, TodoInputComponent]  // TodoInputComponent is included here
})
export class TodoListComponent implements OnInit {
  todos: TodoModel[] = [];
  filteredTodos: TodoModel[] = [];
  showCompletedOnly: boolean = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.store.select(todoSelector).subscribe((state) => {
      this.todos = state || [];
      this.applyFilter();
    });
  }

  onFilterChanged(showCompletedOnly: boolean) {  // Ensure this method expects a boolean
    this.showCompletedOnly = showCompletedOnly;
    this.applyFilter();
  }

  applyFilter() {
    if (this.showCompletedOnly) {
      this.filteredTodos = this.todos.filter(todo => todo.completed);
    } else {
      this.filteredTodos = this.todos;
    }
  }
}
