import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumniStoriesGuestPageRoutingModule } from './alumni-stories-guest-routing.module';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';
import { AlumniStoriesGuestPage } from './alumni-stories-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumniStoriesGuestPageRoutingModule,
    ComponentsGuestModule
  ],
  declarations: [AlumniStoriesGuestPage]
})
export class AlumniStoriesGuestPageModule {}
