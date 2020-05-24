import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentEventPageRoutingModule } from './student-event-routing.module';

import { StudentEventPage } from './student-event.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentEventPageRoutingModule,
    ComponentsModule
  ],
  declarations: [StudentEventPage]
})
export class StudentEventPageModule {}
