import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeeStructureGuestPage } from './fee-structure-guest.page';

const routes: Routes = [
  {
    path: '',
    component: FeeStructureGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeeStructureGuestPageRoutingModule {}
