import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentEcaPageRoutingModule } from './student-eca-routing.module';

import { StudentEcaPage } from './student-eca.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentEcaPageRoutingModule,
    ComponentsModule,
    MaterialModule
  ],
  declarations: [StudentEcaPage]
})
export class StudentEcaPageModule {}
