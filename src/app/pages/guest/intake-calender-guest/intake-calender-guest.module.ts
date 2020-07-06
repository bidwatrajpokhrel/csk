import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntakeCalenderGuestPageRoutingModule } from './intake-calender-guest-routing.module';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';

import { IntakeCalenderGuestPage } from './intake-calender-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntakeCalenderGuestPageRoutingModule,
    ComponentsGuestModule
  ],
  declarations: [IntakeCalenderGuestPage]
})
export class IntakeCalenderGuestPageModule {}
