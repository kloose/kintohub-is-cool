import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from './ui/ui.module';

import { WidgetModule } from './widget/widget.module';
import { AlertService } from './alert.service';

@NgModule({
  declarations: [],
  providers: [AlertService],
  imports: [
    CommonModule,
    UIModule,
    WidgetModule
  ],
})

export class SharedModule { }
