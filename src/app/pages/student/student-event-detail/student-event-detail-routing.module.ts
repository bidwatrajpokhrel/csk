import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentEventDetailPage } from './student-event-detail.page';

const routes: Routes = [
  {
    path: '',
    component: StudentEventDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentEventDetailPageRoutingModule {}
