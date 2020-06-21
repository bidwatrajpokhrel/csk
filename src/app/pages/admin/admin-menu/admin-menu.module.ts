import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminMenuPageRoutingModule } from './admin-menu-routing.module';

import { AdminMenuPage } from './admin-menu.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminMenuPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [AdminMenuPage]
})
export class AdminMenuPageModule {}
