import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmissionProcedureGuestPage } from './admission-procedure-guest.page';

const routes: Routes = [
  {
    path: '',
    component: AdmissionProcedureGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmissionProcedureGuestPageRoutingModule {}
