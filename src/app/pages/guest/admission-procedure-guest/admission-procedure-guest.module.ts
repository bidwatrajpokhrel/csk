import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmissionProcedureGuestPageRoutingModule } from './admission-procedure-guest-routing.module';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';

import { AdmissionProcedureGuestPage } from './admission-procedure-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmissionProcedureGuestPageRoutingModule,
    ComponentsGuestModule
  ],
  declarations: [AdmissionProcedureGuestPage]
})
export class AdmissionProcedureGuestPageModule {}
