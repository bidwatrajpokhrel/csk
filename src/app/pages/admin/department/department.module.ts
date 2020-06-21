import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepartmentPageRoutingModule } from './department-routing.module';
import {MaterialModule} from 'src/app/material.module';

import { DepartmentPage } from './department.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepartmentPageRoutingModule,
    MaterialModule
  ],
  declarations: [DepartmentPage]
})
export class DepartmentPageModule {}
