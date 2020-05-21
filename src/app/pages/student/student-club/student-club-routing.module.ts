import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentClubPage } from './student-club.page';

const routes: Routes = [
  {
    path: '',
    component: StudentClubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentClubPageRoutingModule {}
