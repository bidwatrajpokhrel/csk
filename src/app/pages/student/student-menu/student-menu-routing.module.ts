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
        path: 'sources-of-support',
        loadChildren: () => import('../sources-of-support/sources-of-support.module').then( m => m.SourcesOfSupportPageModule)
      },
      {
        path: 'lecture-schedule',
        loadChildren: () => import('../lecture-schedule/lecture-schedule.module').then( m => m.LectureSchedulePageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('../events/events.module').then( m => m.EventsPageModule)
      }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentMenuPageRoutingModule {}
