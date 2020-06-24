import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {GuestLecturesCreateComponent} from 'src/app/admin-component/guest-lectures-create/guest-lectures-create.component';

@Component({
  selector: 'app-guest-lectures',
  templateUrl: './guest-lectures.page.html',
  styleUrls: ['./guest-lectures.page.scss'],
})
export class GuestLecturesPage implements OnInit {
  onCreate(){
    this.dialog.open(GuestLecturesCreateComponent);
  }
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
