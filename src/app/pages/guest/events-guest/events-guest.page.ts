import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { ClubWithEventsComponent } from 'src/app/components/club-with-events/club-with-events.component';
@Component({
  selector: 'app-events-guest',
  templateUrl: './events-guest.page.html',
  styleUrls: ['./events-guest.page.scss'],
})
export class EventsGuestPage implements OnInit {
  clickAllClubs(){
    this.route.navigate(['/club-guest']);
  }
  constructor(private route: Router, private httpService: HttpService, private storageService: StorageService, private dialog: MatDialog) { }

  onClick(event){
    this.storageService.store('view-event', event).then(res=>this.dialog.open(ClubWithEventsComponent));
  }

  events:any;
  ngOnInit() {
    this.httpService.get('/public/event/').subscribe((res:any)=>{
      this.events = res.data
    })
  }

}
