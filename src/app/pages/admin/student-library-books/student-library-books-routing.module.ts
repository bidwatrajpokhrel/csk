import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentLibraryBooksPage } from './student-library-books.page';

const routes: Routes = [
  {
    path: '',
    component: StudentLibraryBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentLibraryBooksPageRoutingModule {}
