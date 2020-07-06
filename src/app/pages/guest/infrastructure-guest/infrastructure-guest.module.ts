import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfrastructureGuestPageRoutingModule } from './infrastructure-guest-routing.module';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';

import { InfrastructureGuestPage } from './infrastructure-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfrastructureGuestPageRoutingModule,
    ComponentsGuestModule
  ],
  declarations: [InfrastructureGuestPage]
})
export class InfrastructureGuestPageModule {}
