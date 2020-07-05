import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TalkingHeadsPageRoutingModule } from './talking-heads-routing.module';

import { TalkingHeadsPage } from './talking-heads.page';
import { HeadCreateComponent } from 'src/app/admin-component/head-create/head-create.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TalkingHeadsPageRoutingModule,
    MaterialModule
  ],
  declarations: [TalkingHeadsPage, HeadCreateComponent]
})
export class TalkingHeadsPageModule {}
