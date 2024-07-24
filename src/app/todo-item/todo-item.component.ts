import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Import Angular Material Checkbox
import { MatButtonModule } from '@angular/material/button'; // Import Angular Material Button
import { MatListModule } from '@angular/material/list'; // Import MatListModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule

@Component({
  selector: 'app-todo-item',
  standalone: true,
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  imports: [CommonModule, MatCheckboxModule, MatButtonModule, MatListModule, MatIconModule]
})
export class TodoItemComponent {
  @Input() todo!: { id: number, text: string, done: boolean };
  @Output() toggleStatus = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onToggle() {
    this.toggleStatus.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
