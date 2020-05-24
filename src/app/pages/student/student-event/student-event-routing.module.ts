import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentEventPage } from './student-event.page';

const routes: Routes = [
  {
    path: '',
    component: StudentEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentEventPageRoutingModule {}
