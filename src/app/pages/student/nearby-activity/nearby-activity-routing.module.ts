import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearbyActivityPage } from './nearby-activity.page';

const routes: Routes = [
  {
    path: '',
    component: NearbyActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearbyActivityPageRoutingModule {}
