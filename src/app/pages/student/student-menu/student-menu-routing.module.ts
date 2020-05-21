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
    
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentMenuPageRoutingModule {}
