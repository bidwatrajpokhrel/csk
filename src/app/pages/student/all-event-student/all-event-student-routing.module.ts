import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllEventStudentPage } from './all-event-student.page';

const routes: Routes = [
  {
    path: '',
    component: AllEventStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllEventStudentPageRoutingModule {}
