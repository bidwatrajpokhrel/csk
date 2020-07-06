import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesGuestPage } from './courses-guest.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesGuestPageRoutingModule {}
