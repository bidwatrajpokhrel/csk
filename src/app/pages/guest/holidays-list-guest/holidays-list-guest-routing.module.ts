import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolidaysListGuestPage } from './holidays-list-guest.page';

const routes: Routes = [
  {
    path: '',
    component: HolidaysListGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolidaysListGuestPageRoutingModule {}
