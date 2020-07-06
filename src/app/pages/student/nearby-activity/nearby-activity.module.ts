import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyActivityPageRoutingModule } from './nearby-activity-routing.module';
import {ComponentsModule} from 'src/app/components/components.module';
import { NearbyActivityPage } from './nearby-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyActivityPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NearbyActivityPage]
})
export class NearbyActivityPageModule {}
