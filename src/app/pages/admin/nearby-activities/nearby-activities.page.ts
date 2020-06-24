import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {NearbyActivitiesCreateComponent} from 'src/app/admin-component/nearby-activities-create/nearby-activities-create.component';

@Component({
  selector: 'app-nearby-activities',
  templateUrl: './nearby-activities.page.html',
  styleUrls: ['./nearby-activities.page.scss'],
})
export class NearbyActivitiesPage implements OnInit {
  onCreate(){
    this.dialog.open(NearbyActivitiesCreateComponent);
  }
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
