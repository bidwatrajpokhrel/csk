import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {EventsCreateComponent} from 'src/app/admin-component/events-create/events-create.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  onCreate(){
    this.dialog.open(EventsCreateComponent);
  }
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
