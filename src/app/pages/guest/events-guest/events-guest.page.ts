import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-events-guest',
  templateUrl: './events-guest.page.html',
  styleUrls: ['./events-guest.page.scss'],
})
export class EventsGuestPage implements OnInit {
  clickAllClubs(){
    this.route.navigate(['/club-guest']);
  }
  constructor(private route: Router) { }

  ngOnInit() {
  }

}
