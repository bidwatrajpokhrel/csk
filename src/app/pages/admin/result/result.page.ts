import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {ResultCreateComponent} from 'src/app/admin-component/result-create/result-create.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  onCreate(){
    this.dialog.open(ResultCreateComponent);
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
