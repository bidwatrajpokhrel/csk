import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import {GuestLecturesDetailsComponent} from 'src/app/components/guest-lectures-details/guest-lectures-details.component';
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
    MaterialModule
  ],
  declarations: [GuestLecturesPage,GuestLecturesDetailsComponent]
})
export class GuestLecturesPageModule {}
