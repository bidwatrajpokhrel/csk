import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubGuestPageRoutingModule } from './club-guest-routing.module';
import {ComponentsGuestModule} from '../components-guest/components-guest.module';

import { ClubGuestPage } from './club-guest.page';
import {ComponentsModule} from '../../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubGuestPageRoutingModule,
    ComponentsModule,
    ComponentsGuestModule
  ],
  declarations: [ClubGuestPage]
})
export class ClubGuestPageModule {}
