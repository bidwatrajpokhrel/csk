import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksInLibraryPageRoutingModule } from './books-in-library-routing.module';

import { BooksInLibraryPage } from './books-in-library.page';
import  {MaterialModule} from 'src/app/material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksInLibraryPageRoutingModule,
    MaterialModule

  ],
  declarations: [BooksInLibraryPage]
})
export class BooksInLibraryPageModule {}
