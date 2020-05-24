import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentMenuPage } from './student-menu.page';

const routes: Routes = [
  {
    path: '',
    component: StudentMenuPage,
    children: [
      {
        path: 'clubs',
        loadChildren: () => import('../student-club/student-club.module').then( m => m.StudentClubPageModule)
      },
      {
        path: 'clubs/detail',
        loadChildren: () => import('../student-club-detail/student-club-detail.module').then( m => m.StudentClubDetailPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('../student-event/student-event.module').then( m => m.StudentEventPageModule)
      },
      {
        path: 'events/detail',
        loadChildren: () => import('../student-event-detail/student-event-detail.module').then( m => m.StudentEventDetailPageModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentMenuPageRoutingModule {}
