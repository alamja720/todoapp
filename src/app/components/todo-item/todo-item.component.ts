import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { actions } from '../../providers/todos.action';
import { TodoModel } from '../../providers/todos.states';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo?: TodoModel;
  editTodo: boolean = true;
  completeTodo: boolean = false;
  todoInput?: string;
  dateInput?: string;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.completeTodo = this.todo!.completed;
    this.todoInput = this.todo!.title;
    this.dateInput = this.todo!.date;
  }

  updateToggle() {
    this.editTodo = !this.editTodo;
    if(this.editTodo){this.updateTodo()}
  }

  updateTodo(){
    if (this.todoInput!.length > 0) {
      this.store.dispatch(actions.updateTodoAction({
        id: this.todo!.id,
        completed: this.todo!.completed,
        title: this.todoInput!.trim(),
        date: this.dateInput!,
      }));
    } else {
      this.todoInput = this.todo!.title;
    }
  }

  completeToggle() {
    this.completeTodo = !this.completeTodo;
    this.store.dispatch(actions.updateTodoAction({
      id: this.todo!.id,
      completed: this.completeTodo,
      title: this.todo!.title,
      date: this.todo!.date,
    }));
  }

  deleteTodo() {
    this.store.dispatch(actions.deleteTodoAction({
      id: this.todo!.id,
      completed: this.todo!.completed,
      title: this.todo!.title,
      date: this.todo!.date,
    }));
  }
}