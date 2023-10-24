import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Deta3Page } from './deta3.page';

const routes: Routes = [
  {
    path: '',
    component: Deta3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Deta3PageRoutingModule {}
