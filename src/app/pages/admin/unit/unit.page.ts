import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {UnitCreateComponent} from 'src/app/admin-component/unit-create/unit-create.component';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.page.html',
  styleUrls: ['./unit.page.scss'],
})
export class UnitPage implements OnInit {
  onCreate(){
    this.dialog.open(UnitCreateComponent);
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
