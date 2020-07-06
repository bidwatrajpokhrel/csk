import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecognitionGuestPage } from './recognition-guest.page';

const routes: Routes = [
  {
    path: '',
    component: RecognitionGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecognitionGuestPageRoutingModule {}
