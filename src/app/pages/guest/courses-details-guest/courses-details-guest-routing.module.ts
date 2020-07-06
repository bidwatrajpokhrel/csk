import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesDetailsGuestPage } from './courses-details-guest.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesDetailsGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesDetailsGuestPageRoutingModule {}
