import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreNearbyGuestPage } from './explore-nearby-guest.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreNearbyGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreNearbyGuestPageRoutingModule {}
