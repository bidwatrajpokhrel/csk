import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearbyExplorePage } from './nearby-explore.page';

const routes: Routes = [
  {
    path: '',
    component: NearbyExplorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearbyExplorePageRoutingModule {}
