import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {StudentCreateComponent} from 'src/app/admin-component/student-create/student-create.component';


@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
  onCreate(){
    this.dialog.open(StudentCreateComponent);
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
