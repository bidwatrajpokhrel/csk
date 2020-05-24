import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentEventDetailPageRoutingModule } from './student-event-detail-routing.module';

import { StudentEventDetailPage } from './student-event-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentEventDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [StudentEventDetailPage]
})
export class StudentEventDetailPageModule {}
