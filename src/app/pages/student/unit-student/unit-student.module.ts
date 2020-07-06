import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitStudentPageRoutingModule } from './unit-student-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { UnitStudentPage } from './unit-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitStudentPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UnitStudentPage]
})
export class UnitStudentPageModule {}
