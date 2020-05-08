import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { KanbanboardComponent } from './kanbanboard/kanbanboard.component';
import { CreateTaskComponent } from './createtask/create-task.component';

const routes: Routes = [
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'kanban',
        component: KanbanboardComponent
    },
    {
        path: 'create',
        component: CreateTaskComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksRoutingModule { }
