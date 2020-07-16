import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearbyActivityGuestPage } from './nearby-activity-guest.page';

const routes: Routes = [
  {
    path: '',
    component: NearbyActivityGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearbyActivityGuestPageRoutingModule {}
