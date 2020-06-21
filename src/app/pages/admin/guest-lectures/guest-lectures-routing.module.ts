import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestLecturesPage } from './guest-lectures.page';

const routes: Routes = [
  {
    path: '',
    component: GuestLecturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestLecturesPageRoutingModule {}
