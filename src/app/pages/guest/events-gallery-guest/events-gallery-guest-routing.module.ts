import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsGalleryGuestPage } from './events-gallery-guest.page';

const routes: Routes = [
  {
    path: '',
    component: EventsGalleryGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsGalleryGuestPageRoutingModule {}
