import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitPageRoutingModule } from './unit-routing.module';

import { UnitPage } from './unit.page';
import {MaterialModule} from 'src/app/material.module';
import { UnitCreateComponent } from 'src/app/admin-component/unit-create/unit-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitPageRoutingModule,
    MaterialModule
  ],
  declarations: [UnitPage, UnitCreateComponent]
})
export class UnitPageModule {}
