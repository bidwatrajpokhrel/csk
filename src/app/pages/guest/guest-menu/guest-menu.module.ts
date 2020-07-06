import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestMenuPageRoutingModule } from './guest-menu-routing.module';
import { ComponentsModule } from '../../../components/components.module'
import { GuestMenuPage } from './guest-menu.page';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestMenuPageRoutingModule,
    ComponentsModule,
    ComponentsGuestModule
  ],
  declarations: [GuestMenuPage]
})
export class GuestMenuPageModule {}
