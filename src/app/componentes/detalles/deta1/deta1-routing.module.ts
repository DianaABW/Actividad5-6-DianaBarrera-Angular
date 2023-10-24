import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Deta1Page } from './deta1.page';

const routes: Routes = [
  {
    path: '',
    component: Deta1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Deta1PageRoutingModule {}
