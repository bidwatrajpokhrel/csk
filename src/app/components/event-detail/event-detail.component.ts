import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { PublicEventService } from 'src/app/services/public/public-event.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private publicEventService: PublicEventService,
    private router: Router,
    private authService: LoginService
  ) { }

  
 
  eventDetail: any = null;

  ngOnInit() {
    this.storageService.get("eventId").then(event_id =>{
      this.fetchClub(event_id);          
    });
  }

  fetchClub(eventId: string){
    this.publicEventService.getAnEvent(eventId).subscribe(data => {
      this.eventDetail = data.data[0];
      console.log(this.eventDetail);
    });  
  }

  ngOnDestroy(){
    this.storageService.removeItem("eventId");
  }

  viewClub(club){
    this.storageService.get("userData").then(res => {      
      console.log(club.id) //TODO DELETE THIS LINE
      this.storageService.store( "clubId", club.id);
      if (res.type == 'admin'){}
      else if (res.type == 'student'){
        this.router.navigate( ['/student-menu/clubs/detail'] )
      }
      else{}
    })
    
  }


}
