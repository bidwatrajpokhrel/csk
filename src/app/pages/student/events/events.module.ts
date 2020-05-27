import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import {SharedListModule} from '../shared-list/shared-list.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    SharedListModule
  ],
  
  declarations: [EventsPage]
})
export class EventsPageModule {}
