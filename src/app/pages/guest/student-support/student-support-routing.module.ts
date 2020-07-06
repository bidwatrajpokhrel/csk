import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentSupportPage } from './student-support.page';

const routes: Routes = [
  {
    path: '',
    component: StudentSupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentSupportPageRoutingModule {}
