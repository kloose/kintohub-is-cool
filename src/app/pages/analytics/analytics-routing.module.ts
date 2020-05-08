import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';
import { ListingsComponent } from './listings/listings.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsComponent,
    children: [
      {
        path: 'listings',
        component: ListingsComponent
      },
      {
        path: 'company-detail',
        component: CompanyDetailComponent
      },
    ]
  }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
