import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmissionInfoTablePage } from './admission-info-table.page';

const routes: Routes = [
  {
    path: '',
    component: AdmissionInfoTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmissionInfoTablePageRoutingModule {}
