import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacultyPageRoutingModule } from './faculty-routing.module';

import { FacultyPage } from './faculty.page';
import {MaterialModule} from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacultyPageRoutingModule,
    MaterialModule
  ],
  declarations: [FacultyPage]
})
export class FacultyPageModule {}
