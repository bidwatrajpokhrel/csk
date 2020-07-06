import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesGuestPage } from './messages-guest.page';

const routes: Routes = [
  {
    path: '',
    component: MessagesGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesGuestPageRoutingModule {}
