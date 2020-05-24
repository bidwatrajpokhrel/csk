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
  //   path: 'student-event',
  //   loadChildren: () => import('./pages/student/student-event/student-event.module').then( m => m.StudentEventPageModule)
  // },
  // {
  //   path: 'student-event-detail',
  //   loadChildren: () => import('./pages/student/student-event-detail/student-event-detail.module').then( m => m.StudentEventDetailPageModule)
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
