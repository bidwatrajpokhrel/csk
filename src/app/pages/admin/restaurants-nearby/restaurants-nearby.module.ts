import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantsNearbyPageRoutingModule } from './restaurants-nearby-routing.module';

import { RestaurantsNearbyPage } from './restaurants-nearby.page';
import {MaterialModule} from 'src/app/material.module';
import { RestaurantsNearbyCreateComponent } from 'src/app/admin-component/restaurants-nearby-create/restaurants-nearby-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantsNearbyPageRoutingModule,
    MaterialModule
  ],
  declarations: [RestaurantsNearbyPage, RestaurantsNearbyCreateComponent]
})
export class RestaurantsNearbyPageModule {}
