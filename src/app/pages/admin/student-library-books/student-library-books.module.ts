import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentLibraryBooksPageRoutingModule } from './student-library-books-routing.module';

import { StudentLibraryBooksPage } from './student-library-books.page';
import {MaterialModule} from 'src/app/material.module';
import {StudentLibraryBooksCreateComponent} from 'src/app/admin-component/student-library-books-create/student-library-books-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentLibraryBooksPageRoutingModule,
    MaterialModule
  ],
  declarations: [StudentLibraryBooksPage,StudentLibraryBooksCreateComponent]
})
export class StudentLibraryBooksPageModule {}
