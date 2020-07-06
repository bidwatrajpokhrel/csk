import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {ComponentsGuestModule} from '../components-guest/components-guest.module';
import { CanteenMenuGuestPageRoutingModule } from './canteen-menu-guest-routing.module';
import {ComponentsModule} from 'src/app/components/components.module';
import { CanteenMenuGuestPage } from './canteen-menu-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanteenMenuGuestPageRoutingModule,
    ComponentsModule,
    ComponentsGuestModule
  ],
  declarations: [CanteenMenuGuestPage]
})
export class CanteenMenuGuestPageModule {}
