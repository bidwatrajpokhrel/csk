import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeeStructureGuestPageRoutingModule } from './fee-structure-guest-routing.module';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';

import { FeeStructureGuestPage } from './fee-structure-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeeStructureGuestPageRoutingModule,
    ComponentsGuestModule
  ],
  declarations: [FeeStructureGuestPage]
})
export class FeeStructureGuestPageModule {}
