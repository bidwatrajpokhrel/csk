import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MaterialModule} from 'src/app/material.module';
import { CanteenMenuPageRoutingModule } from './canteen-menu-routing.module';
import {ComponentsModule} from 'src/app/components/components.module';
import { CanteenMenuPage } from './canteen-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanteenMenuPageRoutingModule,
    MaterialModule,
    ComponentsModule
  ],
  exports:[],
  declarations: [CanteenMenuPage]
})
export class CanteenMenuPageModule {}
