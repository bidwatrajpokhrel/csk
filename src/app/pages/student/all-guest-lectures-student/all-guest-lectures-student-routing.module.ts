import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllGuestLecturesStudentPage } from './all-guest-lectures-student.page';

const routes: Routes = [
  {
    path: '',
    component: AllGuestLecturesStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllGuestLecturesStudentPageRoutingModule {}
