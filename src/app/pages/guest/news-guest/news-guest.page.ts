import { Component, OnInit } from '@angular/core';
import {NewsDetailsGuestComponent} from 'src/app/pages/guest/components-guest/news-details-guest/news-details-guest.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-news-guest',
  templateUrl: './news-guest.page.html',
  styleUrls: ['./news-guest.page.scss'],
})
export class NewsGuestPage implements OnInit {
  onClick(){
    this.dialog.open(NewsDetailsGuestComponent);
  }
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

}
