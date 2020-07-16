import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsDetailsGuestPage } from './events-details-guest.page';

const routes: Routes = [
  {
    path: '',
    component: EventsDetailsGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsDetailsGuestPageRoutingModule {}
