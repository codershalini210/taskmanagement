import { Component } from '@angular/core';
import { TaskModel } from './task-model';
import { TaskService } from './task-service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tasks',
  imports: [CommonModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
 today: Date;
  tasks: TaskModel[];
  taskService: TaskService;
  constructor() {
    this.taskService = new TaskService();
    this.tasks = this.taskService.taskStore;
    this.today = new Date();
  }
}
