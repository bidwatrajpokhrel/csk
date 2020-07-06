import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUniversityGuestPage } from './about-university-guest.page';

const routes: Routes = [
  {
    path: '',
    component: AboutUniversityGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUniversityGuestPageRoutingModule {}
