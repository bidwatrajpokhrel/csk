import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurTeamGuestPage } from './our-team-guest.page';

const routes: Routes = [
  {
    path: '',
    component: OurTeamGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurTeamGuestPageRoutingModule {}
