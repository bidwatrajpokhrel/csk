import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeDetailsPageRoutingModule } from './employee-details-routing.module';

import { EmployeeDetailsPage } from './employee-details.page';
import {MaterialModule} from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeDetailsPageRoutingModule,
    MaterialModule
  ],
  declarations: [EmployeeDetailsPage]
})
export class EmployeeDetailsPageModule {}
