import { Component, OnInit } from '@angular/core';
import { AdmissionInfoCreateComponent } from 'src/app/admin-component/admission-info-create/admission-info-create.component';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";


@Component({
  selector: 'app-admission-info-table',
  templateUrl: './admission-info-table.page.html',
  styleUrls: ['./admission-info-table.page.scss'],
})
export class AdmissionInfoTablePage implements OnInit {
  
  onCreate(){
    this.dialog.open(AdmissionInfoCreateComponent);
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
