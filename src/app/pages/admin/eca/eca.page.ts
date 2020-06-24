import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {ECACreateComponent} from 'src/app/admin-component/ecacreate/ecacreate.component';

@Component({
  selector: 'app-eca',
  templateUrl: './eca.page.html',
  styleUrls: ['./eca.page.scss'],
})
export class ECAPage implements OnInit {
  onCreate(){
    this.dialog.open(ECACreateComponent);
  }
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
