import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentResultPageRoutingModule } from './student-result-routing.module';

import { StudentResultPage } from './student-result.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentResultPageRoutingModule,
    ComponentsModule
  ],
  declarations: [StudentResultPage]
})
export class StudentResultPageModule {}
