import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbDropdownModule,
    NgbTimepickerModule
} from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';

import { PagetitleComponent } from './pagetitle/pagetitle.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [PagetitleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClickOutsideModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule
  ],
  // tslint:disable-next-line: max-line-length
  exports: [PagetitleComponent]
})
export class UIModule { }
