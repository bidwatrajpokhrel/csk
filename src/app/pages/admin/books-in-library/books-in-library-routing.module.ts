import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksInLibraryPage } from './books-in-library.page';

const routes: Routes = [
  {
    path: '',
    component: BooksInLibraryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksInLibraryPageRoutingModule {}
