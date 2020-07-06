import { Component, OnInit } from '@angular/core';
import {SOSdetailsComponent} from 'src/app/components/sosdetails/sosdetails.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-sources-of-support',
  templateUrl: './sources-of-support.page.html',
  styleUrls: ['./sources-of-support.page.scss'],
})
export class SourcesOfSupportPage implements OnInit {
  clicksosDetails(){
    this.dialog.open(SOSdetailsComponent);
  }
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
