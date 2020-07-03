import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentPageRoutingModule } from './student-routing.module';

import { StudentPage } from './student.page';
import {MaterialModule} from 'src/app/material.module';
import { StudentCreateComponent } from 'src/app/admin-component/student-create/student-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentPageRoutingModule,
    MaterialModule
  ],
  declarations: [StudentPage, StudentCreateComponent]
})
export class StudentPageModule {}
