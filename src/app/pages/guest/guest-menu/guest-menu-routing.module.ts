import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestMenuPage } from './guest-menu.page';

const routes: Routes = [
  {
    path: '',
    component: GuestMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestMenuPageRoutingModule {}
