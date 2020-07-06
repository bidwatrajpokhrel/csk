import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {ComponentsModule} from 'src/app/components/components.module';
import { EventPageRoutingModule } from './event-routing.module';
import {MaterialModule} from 'src/app/material.module';
import { EventPage } from './event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventPageRoutingModule,
    MaterialModule,
    ComponentsModule
  ],
  exports:[],
  declarations: [EventPage]
})
export class EventPageModule {}
