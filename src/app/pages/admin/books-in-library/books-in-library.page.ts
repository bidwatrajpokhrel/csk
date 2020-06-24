import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {BooksInLibraryCreateComponent} from 'src/app/admin-component/books-in-library-create/books-in-library-create.component';

@Component({
  selector: 'app-books-in-library',
  templateUrl: './books-in-library.page.html',
  styleUrls: ['./books-in-library.page.scss'],
})
export class BooksInLibraryPage implements OnInit {
  onCreate(){
    this.dialog.open(BooksInLibraryCreateComponent);
  }
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
