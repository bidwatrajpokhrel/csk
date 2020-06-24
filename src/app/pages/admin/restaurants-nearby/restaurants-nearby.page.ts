import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {RestaurantsNearbyCreateComponent} from 'src/app/admin-component/restaurants-nearby-create/restaurants-nearby-create.component';

@Component({
  selector: 'app-restaurants-nearby',
  templateUrl: './restaurants-nearby.page.html',
  styleUrls: ['./restaurants-nearby.page.scss'],
})
export class RestaurantsNearbyPage implements OnInit {
  onCreate(){
    this.dialog.open(RestaurantsNearbyCreateComponent);
  }
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
