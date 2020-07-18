import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentDashboardPageRoutingModule } from './student-dashboard-routing.module';
import { ComponentsModule } from '../../../components/components.module'
import { StudentDashboardPage } from './student-dashboard.page';
import { FeedbackComponent } from 'src/app/components/feedback/feedback.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentDashboardPageRoutingModule,
    ComponentsModule
  ],
  declarations: [StudentDashboardPage]
})
export class StudentDashboardPageModule {}
