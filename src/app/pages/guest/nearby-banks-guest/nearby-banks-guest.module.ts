import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {ComponentsGuestModule} from '../components-guest/components-guest.module';
import { NearbyBanksGuestPageRoutingModule } from './nearby-banks-guest-routing.module';
import {ComponentsModule} from 'src/app/components/components.module';
import { NearbyBanksGuestPage } from './nearby-banks-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyBanksGuestPageRoutingModule,
    ComponentsModule,
    ComponentsGuestModule
  ],
  declarations: [NearbyBanksGuestPage]
})
export class NearbyBanksGuestPageModule {}
