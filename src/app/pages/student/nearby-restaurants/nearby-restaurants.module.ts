import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyRestaurantsPageRoutingModule } from './nearby-restaurants-routing.module';
import {ComponentsModule} from 'src/app/components/components.module';

import { NearbyRestaurantsPage } from './nearby-restaurants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyRestaurantsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NearbyRestaurantsPage]
})
export class NearbyRestaurantsPageModule {}
