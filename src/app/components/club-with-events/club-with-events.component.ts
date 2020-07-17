import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { PublicClubService } from 'src/app/services/public/public-club.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { HttpService } from 'src/app/services/http.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-club-with-events',
  templateUrl: './club-with-events.component.html',
  styleUrls: ['./club-with-events.component.scss'],
})
export class ClubWithEventsComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private publiclubService: PublicClubService,
    private router: Router,
    private authService: LoginService,
    private httpService: HttpService,
    private toastService: ToastService
  ) { }

  data ={
    event_id: '',
    student_id: ''
  }
  event:any
  ngOnInit() {
    this.storageService.get("view-event").then(res =>{
      this.event = res;         
    });
  }

  ngOnDestroy(){
    this.storageService.removeItem("view-event");
  }

  book(){
    this.data.event_id=this.event.id;
    this.storageService.get('userData').then(res=>{
      this.data.student_id = res.id;
      this.httpService.postWithToken('/student/event-book', this.data).subscribe((result: any)=>{
        if (result.message=="success") {
          this.toastService.presentToast('Successfully Booked Event. Cancel Booking from dashboard.')
        }
      }, error=>{
        this.toastService.presentToast('Booking Unsuccessful. Check to see if you already booked a club from dashboard.')
      })
    })
    
  }

}