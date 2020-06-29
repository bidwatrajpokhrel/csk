import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {ClubWithEventsComponent} from 'src/app/components/club-with-events/club-with-events.component';
import { EventPageRoutingModule } from './event-routing.module';
import {MaterialModule} from 'src/app/material.module';
import { EventPage } from './event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventPageRoutingModule,
    MaterialModule
  ],
  declarations: [EventPage,ClubWithEventsComponent]
})
export class EventPageModule {}
