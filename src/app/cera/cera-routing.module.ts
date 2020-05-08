import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CeraComponent } from './cera.component';
import { SummaryComponent } from './summary/summary.component';
import { GmvComponent } from './gmv/gmv.component';
import { TrafficComponent } from './traffic/traffic.component';
import { MarketingComponent } from './marketing/marketing.component';
import { FakeDownloadComponent } from './fake-download/fake-download.component';

const routes: Routes = [
  {
    path: '',
    component: CeraComponent,
    children: [
      {
        path: 'summary',
        component: SummaryComponent
      },
      {
        path: 'fake/download',
        component: FakeDownloadComponent
      },
      {
        path: 'gmv',
        component: GmvComponent
      },
      {
        path: 'traffic',
        component: TrafficComponent
      },
      {
        path: 'marketing',
        component: MarketingComponent
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
export class CeraRoutingModule { }
