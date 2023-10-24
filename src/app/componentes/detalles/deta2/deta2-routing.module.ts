import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Deta2Page } from './deta2.page';

const routes: Routes = [
  {
    path: '',
    component: Deta2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Deta2PageRoutingModule {}
