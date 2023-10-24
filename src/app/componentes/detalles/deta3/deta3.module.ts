import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Deta3PageRoutingModule } from './deta3-routing.module';
import { Deta3Page } from './deta3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deta3PageRoutingModule
  ],
  declarations: [Deta3Page]
})
export class Deta3Module {}
