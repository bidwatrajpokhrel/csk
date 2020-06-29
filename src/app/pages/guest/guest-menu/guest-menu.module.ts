import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestMenuPageRoutingModule } from './guest-menu-routing.module';
import { ComponentsModule } from '../../../components/components.module'
import { GuestMenuPage } from './guest-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestMenuPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [GuestMenuPage]
})
export class GuestMenuPageModule {}
