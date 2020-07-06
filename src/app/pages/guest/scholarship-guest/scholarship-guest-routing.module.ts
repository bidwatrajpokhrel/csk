import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScholarshipGuestPage } from './scholarship-guest.page';

const routes: Routes = [
  {
    path: '',
    component: ScholarshipGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScholarshipGuestPageRoutingModule {}
