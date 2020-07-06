import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsGuestPage } from './events-guest.page';

const routes: Routes = [
  {
    path: '',
    component: EventsGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsGuestPageRoutingModule {}
