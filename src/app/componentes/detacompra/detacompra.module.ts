import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetacompraPageRoutingModule } from './detacompra-routing.module';

import { DetacompraPage } from './detacompra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetacompraPageRoutingModule
  ],
  declarations: [DetacompraPage]
})
export class DetacompraModule {}
