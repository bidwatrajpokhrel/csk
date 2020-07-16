import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsDetailsGuestPageRoutingModule } from './events-details-guest-routing.module';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';
import { EventsDetailsGuestPage } from './events-details-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsDetailsGuestPageRoutingModule,
    ComponentsGuestModule
  ],
  declarations: [EventsDetailsGuestPage]
})
export class EventsDetailsGuestPageModule {}
