import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MaterialModule} from 'src/app/material.module';
import { CanteenMenuPageRoutingModule } from './canteen-menu-routing.module';
import {CanteenMenuDetailsComponent} from 'src/app/components/canteen-menu-details/canteen-menu-details.component';
import { CanteenMenuPage } from './canteen-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanteenMenuPageRoutingModule,
    MaterialModule
  ],
  declarations: [CanteenMenuPage,CanteenMenuDetailsComponent]
})
export class CanteenMenuPageModule {}
