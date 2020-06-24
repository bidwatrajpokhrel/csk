import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {EventsBookingCreateComponent} from 'src/app/admin-component/events-booking-create/events-booking-create.component';

@Component({
  selector: 'app-events-booking',
  templateUrl: './events-booking.page.html',
  styleUrls: ['./events-booking.page.scss'],
})
export class EventsBookingPage implements OnInit {
  onCreate(){
    this.dialog.open(EventsBookingCreateComponent);
  }
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
