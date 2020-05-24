import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { PublicEventService } from 'src/app/services/public/public-event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private publicEventService: PublicEventService,
    private router: Router,
    private authService: LoginService
  ) {  }

  events: any;

  ngOnInit() {
    this.publicEventService.getEvents().subscribe( result => {
      this.events = result.data;
      console.log( this.events);
    } );
  }
  
  viewEvent(event){
    this.storageService.get("userData").then(res => {      
      console.log(event.id) //TODO DELETE THIS LINE
      this.storageService.store( "eventId", event.id);
      if (res.type == 'admin'){}
      else if (res.type == 'student'){
        this.router.navigate( ['/student-menu/events/detail'] )
      }
      else{}
    })
    
  }


}
