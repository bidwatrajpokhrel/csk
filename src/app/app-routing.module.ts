import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin-menu',
    loadChildren: () => import('./pages/admin/admin-menu/admin-menu.module').then( m => m.AdminMenuPageModule)
  },
  {
    path: 'guest-menu',
    loadChildren: () => import('./pages/guest/guest-menu/guest-menu.module').then( m => m.GuestMenuPageModule)
  },
  {
    path: 'student-menu',
    loadChildren: () => import('./pages/student/student-menu/student-menu.module').then( m => m.StudentMenuPageModule)
  },
  // {
  //   path: 'sources-of-support',
  //   loadChildren: () => import('./pages/student/sources-of-support/sources-of-support.module').then( m => m.SourcesOfSupportPageModule)
  // },
  // {
  //   path: 'lecture-schedule',
  //   loadChildren: () => import('./pages/student/lecture-schedule/lecture-schedule.module').then( m => m.LectureSchedulePageModule)
  // },
  // {
  //   path: 'events',
  //   loadChildren: () => import('./pages/student/events/events.module').then( m => m.EventsPageModule)
  // },


  // {
  //   path: 'student-club-detail',
  //   loadChildren: () => import('./pages/student/student-club-detail/student-club-detail.module').then( m => m.StudentClubDetailPageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
