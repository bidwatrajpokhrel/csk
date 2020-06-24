import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {CanteenMenuCreateComponent} from 'src/app/admin-component/canteen-menu-create/canteen-menu-create.component';

@Component({
  selector: 'app-canteen-menu',
  templateUrl: './canteen-menu.page.html',
  styleUrls: ['./canteen-menu.page.scss'],
})
export class CanteenMenuPage implements OnInit {
  onCreate(){
    this.dialog.open(CanteenMenuCreateComponent);
  }
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
