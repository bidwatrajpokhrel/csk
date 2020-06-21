import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmissionInfoTablePageRoutingModule } from './admission-info-table-routing.module';
import {MaterialModule} from 'src/app/material.module';
import { AdmissionInfoTablePage } from './admission-info-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmissionInfoTablePageRoutingModule,
    MaterialModule
  ],
  declarations: [AdmissionInfoTablePage]
})
export class AdmissionInfoTablePageModule {}
