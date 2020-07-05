import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalkingHeadsPage } from './talking-heads.page';

const routes: Routes = [
  {
    path: '',
    component: TalkingHeadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TalkingHeadsPageRoutingModule {}
