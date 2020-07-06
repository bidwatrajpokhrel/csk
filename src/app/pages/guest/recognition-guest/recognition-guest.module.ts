import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecognitionGuestPageRoutingModule } from './recognition-guest-routing.module';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';

import { RecognitionGuestPage } from './recognition-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecognitionGuestPageRoutingModule,
    ComponentsGuestModule
  ],
  declarations: [RecognitionGuestPage]
})
export class RecognitionGuestPageModule {}
