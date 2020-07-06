import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumniStoriesGuestPage } from './alumni-stories-guest.page';

const routes: Routes = [
  {
    path: '',
    component: AlumniStoriesGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumniStoriesGuestPageRoutingModule {}
