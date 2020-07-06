import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';

import { EventsGalleryGuestPageRoutingModule } from './events-gallery-guest-routing.module';
import {ComponentsModule} from 'src/app/components/components.module';
import { EventsGalleryGuestPage } from './events-gallery-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsGalleryGuestPageRoutingModule,
    ComponentsModule,
    ComponentsGuestModule
  ],
  declarations: [EventsGalleryGuestPage]
})
export class EventsGalleryGuestPageModule {}
