import { Component, OnInit } from '@angular/core';
import {CanteenMenuDetailsComponent} from 'src/app/components/canteen-menu-details/canteen-menu-details.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-canteen-menu',
  templateUrl: './canteen-menu.page.html',
  styleUrls: ['./canteen-menu.page.scss'],
})
export class CanteenMenuPage implements OnInit {
onClick(){
  this.dialog.open(CanteenMenuDetailsComponent);
}
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

}
