import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';

import { EventsGuestPageRoutingModule } from './events-guest-routing.module';
import { EventsGuestPage } from './events-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsGuestPageRoutingModule,
    ComponentsGuestModule
  ],
  declarations: [EventsGuestPage]
})
export class EventsGuestPageModule {}
