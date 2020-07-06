import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurTeamGuestPageRoutingModule } from './our-team-guest-routing.module';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';

import { OurTeamGuestPage } from './our-team-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurTeamGuestPageRoutingModule,
    ComponentsGuestModule
  ],
  declarations: [OurTeamGuestPage]
})
export class OurTeamGuestPageModule {}
