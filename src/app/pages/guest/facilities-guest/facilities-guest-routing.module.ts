import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacilitiesGuestPage } from './facilities-guest.page';

const routes: Routes = [
  {
    path: '',
    component: FacilitiesGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacilitiesGuestPageRoutingModule {}
