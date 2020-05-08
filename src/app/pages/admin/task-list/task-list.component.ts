import { Component, OnInit } from '@angular/core';
import { ChartType, Tasklist } from '../models/list.model';

import { taskChart, tasks } from './data';

@Component({
  selector: 'app-user-list',
  templateUrl: './task-list.component.html',
})

/**
 * Tasks-list component
 */
export class TaskListComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  taskChart: ChartType;

  upcomingTasks: Tasklist[];
  inprogressTasks: Tasklist[];
  completedTasks: Tasklist[];

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Tasks' }, { label: 'Task List', active: true }];

    this._fetchData();
  }

  _fetchData() {
    // all tasks
    this.inprogressTasks = tasks.filter(t => t.taskType === 'inprogress');
    this.upcomingTasks = tasks.filter(t => t.taskType === 'upcoming');
    this.completedTasks = tasks.filter(t => t.taskType === 'completed');

    this.taskChart = taskChart;
  }
}
