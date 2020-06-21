import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubMembershipPage } from './club-membership.page';

const routes: Routes = [
  {
    path: '',
    component: ClubMembershipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubMembershipPageRoutingModule {}
