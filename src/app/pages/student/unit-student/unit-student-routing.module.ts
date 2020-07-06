import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitStudentPage } from './unit-student.page';

const routes: Routes = [
  {
    path: '',
    component: UnitStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitStudentPageRoutingModule {}
