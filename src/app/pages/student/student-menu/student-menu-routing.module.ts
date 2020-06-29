import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentMenuPage } from './student-menu.page';

const routes: Routes = [
  {
    path: '',
    component: StudentMenuPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../student-dashboard/student-dashboard.module').then( m => m.StudentDashboardPageModule)
      },
      {
        path: 'student-dashboard',
        loadChildren: () => import('../student-dashboard/student-dashboard.module').then( m => m.StudentDashboardPageModule)
      },
      {
        path: 'clubs',
        loadChildren: () => import('../student-club/student-club.module').then( m => m.StudentClubPageModule)
      },
      {
        path: 'canteen-menu-student',
        loadChildren: () => import('../canteen-menu/canteen-menu.module').then( m => m.CanteenMenuPageModule)
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
      },
      {
        path: 'events-gallery',
        loadChildren: () => import('../events-gallery/events-gallery.module').then( m => m.EventsGalleryPageModule)
      },
      {
        path: 'explore-nearby',
        loadChildren: () => import('../nearby-explore/nearby-explore.module').then( m => m.NearbyExplorePageModule)
      },
      {
        path: 'guest-lectures-student',
        loadChildren: () => import('../guest-lectures/guest-lectures.module').then( m => m.GuestLecturesPageModule)
      }
      ,
      {
        path: 'event-student',
        loadChildren: () => import('../event/event.module').then( m => m.EventPageModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentMenuPageRoutingModule {}
