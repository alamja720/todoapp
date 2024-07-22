import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { todoSelector } from '../../providers/todos.reducer';
import { TodoModel } from '../../providers/todos.states';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [TodoItemComponent, CommonModule, FormsModule]
})
export class TodoListComponent implements OnInit {
  todos: TodoModel[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.store.select(todoSelector).subscribe((state) => {
      this.todos = state || []; 
      console.log('Todos loaded:', this.todos);
    });
  }
}
