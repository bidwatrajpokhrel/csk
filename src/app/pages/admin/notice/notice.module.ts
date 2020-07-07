import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticePageRoutingModule } from './notice-routing.module';

import { NoticePage } from './notice.page';
import {MaterialModule} from 'src/app/material.module';
import { NoticeCreateComponent } from 'src/app/admin-component/notice-create/notice-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticePageRoutingModule,
    MaterialModule
  ],
  declarations: [NoticePage, NoticeCreateComponent]
})
export class NoticePageModule {}
