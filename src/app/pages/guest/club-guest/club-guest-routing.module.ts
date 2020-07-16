import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubGuestPage } from './club-guest.page';

const routes: Routes = [
  {
    path: '',
    component: ClubGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubGuestPageRoutingModule {}
