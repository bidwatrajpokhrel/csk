import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ComponentsGuestModule} from '../components-guest/components-guest.module';

import { IonicModule } from '@ionic/angular';

import { NearbyActivityGuestPageRoutingModule } from './nearby-activity-guest-routing.module';
import {ComponentsModule} from 'src/app/components/components.module';
import { NearbyActivityGuestPage } from './nearby-activity-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyActivityGuestPageRoutingModule,
    ComponentsGuestModule,
    ComponentsModule
  ],
  declarations: [NearbyActivityGuestPage]
})
export class NearbyActivityGuestPageModule {}
