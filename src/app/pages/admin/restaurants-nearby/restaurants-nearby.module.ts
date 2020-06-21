import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantsNearbyPageRoutingModule } from './restaurants-nearby-routing.module';

import { RestaurantsNearbyPage } from './restaurants-nearby.page';
import {MaterialModule} from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantsNearbyPageRoutingModule,
    MaterialModule
  ],
  declarations: [RestaurantsNearbyPage]
})
export class RestaurantsNearbyPageModule {}
