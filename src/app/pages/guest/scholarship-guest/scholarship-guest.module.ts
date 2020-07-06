import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScholarshipGuestPageRoutingModule } from './scholarship-guest-routing.module';

import { ScholarshipGuestPage } from './scholarship-guest.page';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScholarshipGuestPageRoutingModule,
    ComponentsGuestModule
  ],
  declarations: [ScholarshipGuestPage]
})
export class ScholarshipGuestPageModule {}
