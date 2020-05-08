import { AnalyticsComponent } from './analytics.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    NgbAlertModule,
    NgbDatepickerModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgbTypeaheadModule
} from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DndModule } from 'ngx-drag-drop';
import { NgSelectModule } from '@ng-select/ng-select';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ListingsComponent } from './listings/listings.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        AnalyticsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbDatepickerModule,
        CKEditorModule,
        DndModule,
        NgbDropdownModule,
        NgbTooltipModule,
        NgSelectModule,
        UIModule,
        NgbPaginationModule,
        NgbTypeaheadModule,
        FormsModule,
        NgxDatatableModule,
        NgbAlertModule
    ],
    providers: [],
    declarations: [
        AnalyticsComponent,
        ListingsComponent,
        CompanyDetailComponent,
    ]
})
export class AnalyticsModule {
}
