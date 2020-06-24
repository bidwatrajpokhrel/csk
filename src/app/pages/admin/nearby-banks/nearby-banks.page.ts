import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {NearbyBanksCreateComponent} from 'src/app/admin-component/nearby-banks-create/nearby-banks-create.component';

@Component({
  selector: 'app-nearby-banks',
  templateUrl: './nearby-banks.page.html',
  styleUrls: ['./nearby-banks.page.scss'],
})
export class NearbyBanksPage implements OnInit {
  onCreate(){
    this.dialog.open(NearbyBanksCreateComponent);
  }
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
