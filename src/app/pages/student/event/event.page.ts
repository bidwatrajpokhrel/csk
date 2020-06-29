import { Component, OnInit } from '@angular/core';
import {ClubWithEventsComponent} from 'src/app/components/club-with-events/club-with-events.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  onClick(){
    this.dialog.open(ClubWithEventsComponent);
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
