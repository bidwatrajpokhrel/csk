import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import { AssessmentCreateComponent } from 'src/app/admin-component/assessment-create/assessment-create.component';


@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.page.html',
  styleUrls: ['./assessment.page.scss'],
})
export class AssessmentPage implements OnInit {
  onCreate(){
    this.dialog.open(AssessmentCreateComponent);
  }


  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
