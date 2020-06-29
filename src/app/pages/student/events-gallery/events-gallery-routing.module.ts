import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsGalleryPage } from './events-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: EventsGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsGalleryPageRoutingModule {}
