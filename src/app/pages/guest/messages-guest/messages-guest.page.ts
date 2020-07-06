import { Component, OnInit } from '@angular/core';
import {MessagesDetailsComponent} from 'src/app/pages/guest/components-guest/messages-details/messages-details.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-messages-guest',
  templateUrl: './messages-guest.page.html',
  styleUrls: ['./messages-guest.page.scss'],
})
export class MessagesGuestPage implements OnInit {
onClick(){
  this.dialog.open(MessagesDetailsComponent);
}
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

}
