import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentFacultyPageRoutingModule } from './student-faculty-routing.module';

import { StudentFacultyPage } from './student-faculty.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentFacultyPageRoutingModule,
    MaterialModule,
    ComponentsModule
  ],
  declarations: [StudentFacultyPage]
})
export class StudentFacultyPageModule {}
