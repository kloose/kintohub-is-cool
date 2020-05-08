import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { StatComponent } from './stat/stat.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MetabaseViewComponent } from './metabase-view/metabase-view.component';
import { OptionSelectorComponent } from './option-selector/option-selector.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    declarations: [
        StatComponent,
        TransactionComponent,
        MetabaseViewComponent,
        OptionSelectorComponent,
        CountrySelectorComponent,
    ],
    imports: [
        CommonModule,
        NgbModalModule,
        NgSelectModule
    ],
    exports: [
        StatComponent,
        TransactionComponent,
        MetabaseViewComponent,
        OptionSelectorComponent,
        CountrySelectorComponent,
    ]
})
export class WidgetModule {
}
