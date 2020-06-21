import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ECAPage } from './eca.page';

const routes: Routes = [
  {
    path: '',
    component: ECAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECAPageRoutingModule {}
