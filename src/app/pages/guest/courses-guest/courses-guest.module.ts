import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesGuestPageRoutingModule } from './courses-guest-routing.module';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';

import { CoursesGuestPage } from './courses-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesGuestPageRoutingModule,
    ComponentsGuestModule
  ],
  declarations: [CoursesGuestPage]
})
export class CoursesGuestPageModule {}
