import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacultyPageRoutingModule } from './faculty-routing.module';

import { FacultyPage } from './faculty.page';
import {MaterialModule} from 'src/app/material.module';
import { FacultyCreateComponent } from 'src/app/admin-component/faculty-create/faculty-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacultyPageRoutingModule,
    MaterialModule
  ],
  declarations: [FacultyPage, FacultyCreateComponent]
})
export class FacultyPageModule {}
