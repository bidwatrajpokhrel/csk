import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentClubDetailPage } from './student-club-detail.page';

const routes: Routes = [
  {
    path: '',
    component: StudentClubDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentClubDetailPageRoutingModule {}
