import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    TodoItemComponent
  ]
})
export class TodoComponent implements OnInit {
  todos: { id: number, text: string, done: boolean }[] = [];
  newTodo: string = '';

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.loadTodos();
    }
  }

  addTodo() {
    if (this.newTodo.trim()) {
      const newTodoItem = { id: Date.now(), text: this.newTodo, done: false };
      this.todos.push(newTodoItem);
      this.saveTodos();
      this.newTodo = '';
    }
  }

  toggleTodoStatus(todoId: number) {
    const todo = this.todos.find(t => t.id === todoId);
    if (todo) {
      todo.done = !todo.done;
      this.saveTodos();
    }
  }

  deleteTodo(todoId: number) {
    this.todos = this.todos.filter(t => t.id !== todoId);
    this.saveTodos();
  }

  private saveTodos() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  private loadTodos() {
    if (typeof window !== 'undefined') {
      const todos = localStorage.getItem('todos');
      if (todos) {
        this.todos = JSON.parse(todos);
      }
    }
  }
}
