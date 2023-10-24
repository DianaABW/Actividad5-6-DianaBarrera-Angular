import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraPageRoutingModule } from './compra-routing.module';

import { CompraPage } from './compra.page';

import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CompraPage]
})
export class CompraModule {}
