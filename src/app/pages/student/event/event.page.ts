import { Component, OnInit } from '@angular/core';
import {ClubWithEventsComponent} from 'src/app/components/club-with-events/club-with-events.component';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { StudentRequestEventComponent } from 'src/app/components/student-request-event/student-request-event.component';
@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  onClick(event){
    this.storageService.store('view-event', event).then(res=>this.dialog.open(ClubWithEventsComponent));
  }
<<<<<<< HEAD
  
  constructor(private dialog: MatDialog, private route: Router) { }
=======
  clickAllEvents(){
    this.route.navigate(['/all-event-student']);
  }

  constructor(private dialog: MatDialog,
    private route: Router,
    private httpService: HttpService,
    private storageService: StorageService) { }
>>>>>>> Merged-Student

  events: any;
  ngOnInit() {
    this.httpService.get('/public/event/').subscribe((result:any)=>{
      this.events = result.data
    });
  }

  request(){
    this.dialog.open(StudentRequestEventComponent)
  }

}
