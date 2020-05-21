import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentClubPageRoutingModule } from './student-club-routing.module';

import { StudentClubPage } from './student-club.page';

import { ComponentsModule } from '../../../components/components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentClubPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [StudentClubPage]
})
export class StudentClubPageModule {}
