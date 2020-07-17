import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import {ComponentsModule} from 'src/app/components/components.module';
import { GuestLecturesPageRoutingModule } from './guest-lectures-routing.module';
import { GuestLecturesPage } from './guest-lectures.page';
import {MaterialModule} from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestLecturesPageRoutingModule,
    HttpClientModule,
    MaterialModule,
    ComponentsModule
  ],
  declarations: [GuestLecturesPage]
})
export class GuestLecturesPageModule {}
