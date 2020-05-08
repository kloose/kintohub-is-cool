import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgApexchartsModule } from 'ng-apexcharts';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DndModule } from 'ngx-drag-drop';
import { NgbDatepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { TasksRoutingModule } from './tasks-routing.module';
import { UIModule } from '../../shared/ui/ui.module';

import { ListComponent } from './list/list.component';
import { KanbanboardComponent } from './kanbanboard/kanbanboard.component';
import { CreateTaskComponent } from './createtask/create-task.component';

@NgModule({
  declarations: [ListComponent, KanbanboardComponent, CreateTaskComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TasksRoutingModule,
    UIModule,
    NgApexchartsModule,
    NgbDatepickerModule,
    CKEditorModule,
    DndModule,
    NgbDropdownModule
  ]
})
export class TasksModule { }
