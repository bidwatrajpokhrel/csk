import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacilitiesGuestPageRoutingModule } from './facilities-guest-routing.module';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';

import { FacilitiesGuestPage } from './facilities-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacilitiesGuestPageRoutingModule,
    ComponentsGuestModule
  ],
  declarations: [FacilitiesGuestPage]
})
export class FacilitiesGuestPageModule {}
