import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllGuestLecturesStudentPageRoutingModule } from './all-guest-lectures-student-routing.module';

import { AllGuestLecturesStudentPage } from './all-guest-lectures-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllGuestLecturesStudentPageRoutingModule
  ],
  declarations: [AllGuestLecturesStudentPage]
})
export class AllGuestLecturesStudentPageModule {}
