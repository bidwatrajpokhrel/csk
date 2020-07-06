import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllEventStudentPageRoutingModule } from './all-event-student-routing.module';
import { AllEventStudentPage } from './all-event-student.page';
import {ComponentsModule} from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllEventStudentPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AllEventStudentPage]
})
export class AllEventStudentPageModule {}
