import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfrastructureGuestPage } from './infrastructure-guest.page';

const routes: Routes = [
  {
    path: '',
    component: InfrastructureGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfrastructureGuestPageRoutingModule {}
