import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearbyRestaurantGuestPage } from './nearby-restaurant-guest.page';

const routes: Routes = [
  {
    path: '',
    component: NearbyRestaurantGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearbyRestaurantGuestPageRoutingModule {}
