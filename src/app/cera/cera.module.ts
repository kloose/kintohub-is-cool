import { CeraComponent } from './cera.component';
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
import { CeraRoutingModule } from './cera-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SummaryComponent } from './summary/summary.component';
import { GmvComponent } from './gmv/gmv.component';
import { MarketingComponent } from './marketing/marketing.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TransactionComponent } from './transaction/transaction.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UIModule } from '../shared/ui/ui.module';
import { FakeDownloadComponent } from './fake-download/fake-download.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        CeraRoutingModule,
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
        NgbAlertModule,
        NgApexchartsModule,
    ],
    providers: [],
    declarations: [
        CeraComponent,
        SummaryComponent,
        GmvComponent,
        MarketingComponent,
        TrafficComponent,
        TransactionComponent,
        FakeDownloadComponent,
    ]
})
export class CeraModule {
}
