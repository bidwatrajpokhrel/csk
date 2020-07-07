import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MajorPageRoutingModule } from './major-routing.module';

import { MajorPage } from './major.page';
import {MaterialModule} from 'src/app/material.module';
import { MajorCreateComponent } from 'src/app/admin-component/major-create/major-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MajorPageRoutingModule,
    MaterialModule
  ],
  declarations: [MajorPage, MajorCreateComponent]
})
export class MajorPageModule {}
