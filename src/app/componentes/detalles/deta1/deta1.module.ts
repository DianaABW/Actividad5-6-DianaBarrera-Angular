import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Deta1PageRoutingModule } from './deta1-routing.module';
import { Deta1Page } from './deta1.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deta1PageRoutingModule
  ],
  declarations:[
    Deta1Page
  ]
})
export class Deta1Module { }
