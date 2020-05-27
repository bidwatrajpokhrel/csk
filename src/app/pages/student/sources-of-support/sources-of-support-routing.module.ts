import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SourcesOfSupportPage } from './sources-of-support.page';
import { SOSdetailsComponent } from 'src/app/components/sosdetails/sosdetails.component';

const routes: Routes = [
  {
    path: '',
    component: SourcesOfSupportPage
  },
  {
    path: 'SOSdetail',
    component: SOSdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SourcesOfSupportPageRoutingModule {}
