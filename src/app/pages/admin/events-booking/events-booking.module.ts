import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsBookingPageRoutingModule } from './events-booking-routing.module';

import { EventsBookingPage } from './events-booking.page';
import{MaterialModule} from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsBookingPageRoutingModule,
    MaterialModule
  ],
  declarations: [EventsBookingPage]
})
export class EventsBookingPageModule {}
