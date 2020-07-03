import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestLecturesPageRoutingModule } from './guest-lectures-routing.module';

import { GuestLecturesPage } from './guest-lectures.page';
import{MaterialModule} from 'src/app/material.module';
import { GuestLecturesCreateComponent } from 'src/app/admin-component/guest-lectures-create/guest-lectures-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestLecturesPageRoutingModule,
    MaterialModule,
  ],
  declarations: [GuestLecturesPage, GuestLecturesCreateComponent]
})
export class GuestLecturesPageModule {}
