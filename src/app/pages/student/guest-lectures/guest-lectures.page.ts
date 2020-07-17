import { Component, OnInit } from '@angular/core';
import {GuestLecturesDetailsComponent} from 'src/app/components/guest-lectures-details/guest-lectures-details.component';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-guest-lectures',
  templateUrl: './guest-lectures.page.html',
  styleUrls: ['./guest-lectures.page.scss'],
})
export class GuestLecturesPage implements OnInit {
 onClick(stuff){
   this.storageService.store('view-guest', stuff).then(res=>this.dialog.open(GuestLecturesDetailsComponent));
 }
 clickAllGuestLectures(){
  this.route.navigate(['/all-guest-lectures-student']);
 }
constructor(private dialog: MatDialog, private route:Router, private httpService: HttpService, private storageService: StorageService) { 
}

guests: any;
ngOnInit() {
  this.httpService.get('/public/guest_lecture').subscribe((result:any)=>{
    this.guests = result.data;
  });
}

}
