import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import { StudentLibraryBooksCreateComponent } from 'src/app/admin-component/student-library-books-create/student-library-books-create.component';

@Component({
  selector: 'app-student-library-books',
  templateUrl: './student-library-books.page.html',
  styleUrls: ['./student-library-books.page.scss'],
})
export class StudentLibraryBooksPage implements OnInit {
  onCreate(){
    this.dialog.open(StudentLibraryBooksCreateComponent);
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
