import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentSupportPageRoutingModule } from './student-support-routing.module';

import { StudentSupportPage } from './student-support.page';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentSupportPageRoutingModule,
    ComponentsGuestModule
  ],
  declarations: [StudentSupportPage]
})
export class StudentSupportPageModule {}
