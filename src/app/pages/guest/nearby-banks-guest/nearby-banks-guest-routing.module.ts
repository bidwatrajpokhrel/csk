import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearbyBanksGuestPage } from './nearby-banks-guest.page';

const routes: Routes = [
  {
    path: '',
    component: NearbyBanksGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearbyBanksGuestPageRoutingModule {}
