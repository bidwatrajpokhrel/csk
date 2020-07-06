import { Component, OnInit } from '@angular/core';
import {GuestLecturesDetailsComponent} from 'src/app/components/guest-lectures-details/guest-lectures-details.component';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-guest-lectures',
  templateUrl: './guest-lectures.page.html',
  styleUrls: ['./guest-lectures.page.scss'],
})
export class GuestLecturesPage implements OnInit {
 onClick(){
   this.dialog.open(GuestLecturesDetailsComponent);
 }
 clickAllGuestLectures(){
  this.route.navigate(['/all-guest-lectures-student']);
 }
constructor(private dialog: MatDialog, private route:Router) { 
}

ngOnInit() {}

}
