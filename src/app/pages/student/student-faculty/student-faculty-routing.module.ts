import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentFacultyPage } from './student-faculty.page';

const routes: Routes = [
  {
    path: '',
    component: StudentFacultyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentFacultyPageRoutingModule {}
