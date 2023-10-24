import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetacompraPage } from './detacompra.page';

const routes: Routes = [
  {
    path: '',
    component: DetacompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetacompraPageRoutingModule {}
