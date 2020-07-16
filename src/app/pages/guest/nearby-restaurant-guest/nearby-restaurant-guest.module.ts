import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyRestaurantGuestPageRoutingModule } from './nearby-restaurant-guest-routing.module';
import {ComponentsGuestModule} from '../components-guest/components-guest.module';
import { NearbyRestaurantGuestPage } from './nearby-restaurant-guest.page';
import {ComponentsModule} from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyRestaurantGuestPageRoutingModule,
    ComponentsGuestModule,
    ComponentsModule
  ],
  declarations: [NearbyRestaurantGuestPage]
})
export class NearbyRestaurantGuestPageModule {}
