import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgApexchartsModule } from 'ng-apexcharts';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DndModule } from 'ngx-drag-drop';
import { NgbAlertModule, NgbDatepickerModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminRoutingModule } from './admin-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { AdminService } from './admin.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CountryEditComponent } from './country/country-edit/country-edit.component';
import { CountryService } from '../contacts/country.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ConfigListComponent } from './config/config-list/config-list.component';
import { ConfigEditComponent } from './config/config-edit/config-edit.component';
import { ConfigService } from './config.service';
import { FlagListComponent } from './flag/flag-list/flag-list.component';
import { FlagEditComponent } from './flag/flag-edit/flag-edit.component';
import { OptionListComponent } from './option/option-list/option-list.component';
import { OptionEditComponent } from './option/option-edit/option-edit.component';
import { FlagService } from './flag.service';
import { OptionService } from './option.service';
import { ProductService } from './product/product.service';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { RoleEditComponent } from './role/role-edit/role-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { RoleService } from './role.service';
import { UserService } from './user.service';

@NgModule({
    declarations: [
        AdminDashboardComponent,
        TaskListComponent,
        CountryListComponent,
        CountryEditComponent,
        ConfigListComponent,
        ConfigEditComponent,
        FlagListComponent,
        FlagEditComponent,
        OptionListComponent,
        OptionEditComponent,
        ProductFormComponent,
        ProductListComponent,
        ProductEditComponent,
        RoleListComponent,
        RoleEditComponent,
        UserListComponent,
        UserEditComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        UIModule,
        NgApexchartsModule,
        NgbDatepickerModule,
        CKEditorModule,
        DndModule,
        NgbDropdownModule,
        NgbTooltipModule,
        NgbAlertModule,
        NgSelectModule,
        NgxDatatableModule,
    ],
    providers: [
        AdminService,
        CountryService,
        ConfigService,
        FlagService,
        OptionService,
        ProductService,
        RoleService,
        UserService,
    ]
})
export class AdminModule {
}
