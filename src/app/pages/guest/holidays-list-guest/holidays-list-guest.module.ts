import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HolidaysListGuestPageRoutingModule } from './holidays-list-guest-routing.module';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';
import { HolidaysListGuestPage } from './holidays-list-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HolidaysListGuestPageRoutingModule,
    ComponentsGuestModule
  ],
  declarations: [HolidaysListGuestPage]
})
export class HolidaysListGuestPageModule {}
