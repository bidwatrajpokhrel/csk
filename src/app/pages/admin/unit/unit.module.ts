import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitPageRoutingModule } from './unit-routing.module';

import { UnitPage } from './unit.page';
import {MaterialModule} from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitPageRoutingModule,
    MaterialModule
  ],
  declarations: [UnitPage]
})
export class UnitPageModule {}
