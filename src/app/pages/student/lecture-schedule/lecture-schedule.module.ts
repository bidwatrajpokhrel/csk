import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LectureSchedulePageRoutingModule } from './lecture-schedule-routing.module';

import { LectureSchedulePage } from './lecture-schedule.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LectureSchedulePageRoutingModule,
    MaterialModule
  ],
  declarations: [LectureSchedulePage]
})
export class LectureSchedulePageModule {}
