import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel } from '../../providers/todos.states';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { selectAllTodos, selectTodosOrderedByDate } from '../../providers/todos.selector';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [TodoItemComponent, TodoInputComponent, CommonModule]
})
export class TodoListComponent implements OnInit {
  todos: TodoModel[] = [];
  filteredTodos: TodoModel[] = [];
  showCompletedOnly: boolean = false;
  orderByDate: boolean = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    const selector = this.orderByDate ? selectTodosOrderedByDate : selectAllTodos;
    this.store.select(selector).subscribe((state) => {
      this.todos = state || [];
      this.applyFilter();
    });
  }

  onFilterChanged(showCompletedOnly: boolean) {
    this.showCompletedOnly = showCompletedOnly;
    this.applyFilter();
  }

  onOrderChanged(orderByDate: boolean) {
    this.orderByDate = orderByDate;
    this.loadTodos();
  }

  applyFilter() {
    if (this.showCompletedOnly) {
      this.filteredTodos = this.todos.filter(todo => todo.completed);
    } else {
      this.filteredTodos = this.todos;
    }
  }
}
