import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import {MaterialModule} from 'src/app/material.module';
import { EventsCreateComponent } from 'src/app/admin-component/events-create/events-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    MaterialModule
  ],
  declarations: [EventsPage, EventsCreateComponent]
})
export class EventsPageModule {}
