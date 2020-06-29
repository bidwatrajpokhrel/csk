import { Component, OnInit } from '@angular/core';
import {GuestLecturesDetailsComponent} from 'src/app/components/guest-lectures-details/guest-lectures-details.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-guest-lectures',
  templateUrl: './guest-lectures.page.html',
  styleUrls: ['./guest-lectures.page.scss'],
})
export class GuestLecturesPage implements OnInit {
 onClick(){
   this.dialog.open(GuestLecturesDetailsComponent);
 }
constructor(private dialog: MatDialog) { 
}

ngOnInit() {}

}
