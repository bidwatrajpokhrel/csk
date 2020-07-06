import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutUniversityGuestPageRoutingModule } from './about-university-guest-routing.module';
import {GuestMenuPageModule} from '../guest-menu/guest-menu.module'
import { AboutUniversityGuestPage } from './about-university-guest.page';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutUniversityGuestPageRoutingModule,
    GuestMenuPageModule,
    ComponentsGuestModule
  ],
  declarations: [AboutUniversityGuestPage]
})
export class AboutUniversityGuestPageModule {}
