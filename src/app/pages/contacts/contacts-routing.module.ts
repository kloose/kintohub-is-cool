import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';

let ClientWizardComponent;
const routes: Routes = [
    {
        path: '',
        component: ContactsComponent
    }, {
        path: 'companies',
        component: CompanyListComponent
    }, {
        path: 'company',
        component: CompanyEditComponent
    }, {
        path: 'company/:id',
        component: CompanyEditComponent
    },{
        path: 'people',
        component: PersonListComponent
    }, {
        path: 'person',
        component: PersonEditComponent
    }, {
        path: 'person/:id',
        component: PersonEditComponent
    }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ContactsRoutingModule { }
