import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanteenMenuPageRoutingModule } from './canteen-menu-routing.module';

import { CanteenMenuPage } from './canteen-menu.page';
import {MaterialModule} from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanteenMenuPageRoutingModule,
    MaterialModule
  ],
  declarations: [CanteenMenuPage]
})
export class CanteenMenuPageModule {}
