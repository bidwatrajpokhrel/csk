import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsNearbyPage } from './restaurants-nearby.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantsNearbyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantsNearbyPageRoutingModule {}
