import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-guest-lectures-details',
  templateUrl: './guest-lectures-details.component.html',
  styleUrls: ['./guest-lectures-details.component.scss'],
})
export class GuestLecturesDetailsComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {}

}
