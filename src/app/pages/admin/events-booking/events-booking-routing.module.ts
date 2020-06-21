import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsBookingPage } from './events-booking.page';

const routes: Routes = [
  {
    path: '',
    component: EventsBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsBookingPageRoutingModule {}
