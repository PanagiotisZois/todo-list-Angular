import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component'; // Import TodoComponent
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, 
              TodoComponent,
              MatToolbarModule] // Include TodoComponent here
})
export class AppComponent {
  title = 'To-Do App';
}
