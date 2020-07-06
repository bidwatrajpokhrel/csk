import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesDetailsGuestPageRoutingModule } from './courses-details-guest-routing.module';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';

import { CoursesDetailsGuestPage } from './courses-details-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesDetailsGuestPageRoutingModule,
    ComponentsGuestModule
  ],
  declarations: [CoursesDetailsGuestPage]
})
export class CoursesDetailsGuestPageModule {}
