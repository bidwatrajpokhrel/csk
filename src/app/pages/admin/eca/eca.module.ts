import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ECAPageRoutingModule } from './eca-routing.module';

import { ECAPage } from './eca.page';
import {MaterialModule} from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ECAPageRoutingModule,
    MaterialModule
  ],
  declarations: [ECAPage]
})
export class ECAPageModule {}
