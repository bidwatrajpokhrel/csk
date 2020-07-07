import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanteenMenuPageRoutingModule } from './canteen-menu-routing.module';

import { CanteenMenuPage } from './canteen-menu.page';
import {MaterialModule} from 'src/app/material.module';
import { CanteenMenuCreateComponent } from 'src/app/admin-component/canteen-menu-create/canteen-menu-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanteenMenuPageRoutingModule,
    MaterialModule
  ],
  declarations: [CanteenMenuPage, CanteenMenuCreateComponent]
})
export class CanteenMenuPageModule {}
