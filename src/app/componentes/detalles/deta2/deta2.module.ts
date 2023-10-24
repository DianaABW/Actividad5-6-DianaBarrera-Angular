import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Deta2PageRoutingModule } from './deta2-routing.module';
import { Deta2Page } from './deta2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deta2PageRoutingModule
  ],
  declarations: [Deta2Page]
})
export class Deta2Module {}
