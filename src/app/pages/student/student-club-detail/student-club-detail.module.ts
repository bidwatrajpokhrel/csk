import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentClubDetailPageRoutingModule } from './student-club-detail-routing.module';

import { StudentClubDetailPage } from './student-club-detail.page';


import { ComponentsModule } from '../../../components/components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentClubDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [StudentClubDetailPage]
})
export class StudentClubDetailPageModule {}
