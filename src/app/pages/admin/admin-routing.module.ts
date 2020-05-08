import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CountryEditComponent } from './country/country-edit/country-edit.component';
import { ConfigListComponent } from './config/config-list/config-list.component';
import { ConfigEditComponent } from './config/config-edit/config-edit.component';
import { FlagListComponent } from './flag/flag-list/flag-list.component';
import { FlagEditComponent } from './flag/flag-edit/flag-edit.component';
import { OptionListComponent } from './option/option-list/option-list.component';
import { OptionEditComponent } from './option/option-edit/option-edit.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { RoleEditComponent } from './role/role-edit/role-edit.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
    {
        path: '',
        component: AdminDashboardComponent
    },{
        path: 'users',
        component: TaskListComponent
    },{
        path: 'countries',
        component: CountryListComponent,
    },{
        path: 'country',
        component: CountryEditComponent,
    },{
        path: 'country/:id',
        component: CountryEditComponent,
    },{
        path: 'configs',
        component: ConfigListComponent,
    },{
        path: 'config',
        component: ConfigEditComponent,
    },{
        path: 'config/:id',
        component: ConfigEditComponent,
    },{
        path: 'flags',
        component: FlagListComponent,
    },{
        path: 'flag',
        component: FlagEditComponent,
    },{
        path: 'flag/:id',
        component: FlagEditComponent,
    },{
        path: 'options',
        component: OptionListComponent,
    },{
        path: 'option',
        component: OptionEditComponent,
    },{
        path: 'option/:id',
        component: OptionEditComponent,
    },{
        path: 'products',
        component: ProductListComponent,
    },{
        path: 'product',
        component: ProductEditComponent,
    },{
        path: 'product/:id',
        component: ProductEditComponent,
    },{
        path: 'roles',
        component: RoleListComponent,
    },{
        path: 'role',
        component: RoleEditComponent,
    },{
        path: 'role/:id',
        component: RoleEditComponent,
    },{
        path: 'users',
        component: UserListComponent,
    },{
        path: 'user',
        component: UserEditComponent,
    },{
        path: 'user/:id',
        component: UserEditComponent,
    },
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
