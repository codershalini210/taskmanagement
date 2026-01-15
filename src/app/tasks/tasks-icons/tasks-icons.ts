import { Component,Input } from '@angular/core';
import { TaskModel } from '../task-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-icons',
  imports: [CommonModule],
  templateUrl: './tasks-icons.html',
  styleUrl: './tasks-icons.css',
})
export class TasksIcons {
 @Input() task!: TaskModel;
  @Input() size!: string;
  icons: Object[] = [];
  constructor() { }
  ngOnInit() {
    this.icons.length = this.task.noRequired;
    this.icons.fill({ name: this.task.name });
  }
}
