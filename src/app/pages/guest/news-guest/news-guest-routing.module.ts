import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsGuestPage } from './news-guest.page';

const routes: Routes = [
  {
    path: '',
    component: NewsGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsGuestPageRoutingModule {}
