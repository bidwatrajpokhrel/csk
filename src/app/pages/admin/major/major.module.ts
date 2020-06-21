import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MajorPageRoutingModule } from './major-routing.module';

import { MajorPage } from './major.page';
import {MaterialModule} from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MajorPageRoutingModule,
    MaterialModule
  ],
  declarations: [MajorPage]
})
export class MajorPageModule {}
