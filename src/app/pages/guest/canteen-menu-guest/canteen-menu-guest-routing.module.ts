import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanteenMenuGuestPage } from './canteen-menu-guest.page';

const routes: Routes = [
  {
    path: '',
    component: CanteenMenuGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanteenMenuGuestPageRoutingModule {}
