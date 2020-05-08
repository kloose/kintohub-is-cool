import { ContactsComponent } from './contacts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from './company.service';
import {
    NgbAlertModule,
    NgbDatepickerModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgbTabsetModule,
    NgbTooltipModule,
    NgbTypeaheadModule
} from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DndModule } from 'ngx-drag-drop';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContactsRoutingModule } from './contacts-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CountryService } from './country.service';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonService } from './person.service';
import { NgWizardConfig, NgWizardModule, THEME } from 'ng-wizard';
import { PersonFormComponent } from './person/person-form/person-form.component';
import { EntityPersonListComponent } from './person/entity-person-list/entity-person-list.component';
import { CompanyFormComponent } from './company/company-form/company-form.component';
import { OptionService } from '../admin/option.service';
import { EmailAddressComponent } from './email-address/email-address.component';
import { ProductSelectorComponent } from './product/product-selector/product-selector.component';
import { ProductService } from '../admin/product/product.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const ngWizardConfig: NgWizardConfig = {
    theme: THEME.default
};

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ContactsRoutingModule,
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
        NgbTabsetModule,
        FormsModule,
        NgxDatatableModule,
        NgbAlertModule,
        NgWizardModule.forRoot(ngWizardConfig),
        SweetAlert2Module,
    ],
    providers: [
        CompanyService,
        CountryService,
        PersonService,
        OptionService,
        ProductService,
    ],
    declarations: [
        ContactsComponent,
        PersonListComponent,
        PersonEditComponent,
        CompanyListComponent,
        CompanyEditComponent,
        PersonFormComponent,
        EntityPersonListComponent,
        CompanyFormComponent,
        EmailAddressComponent,
        ProductSelectorComponent,
    ]
})
export class ContactsModule {
}
