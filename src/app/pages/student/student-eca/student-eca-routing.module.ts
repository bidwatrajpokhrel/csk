import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentEcaPage } from './student-eca.page';

const routes: Routes = [
  {
    path: '',
    component: StudentEcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentEcaPageRoutingModule {}
