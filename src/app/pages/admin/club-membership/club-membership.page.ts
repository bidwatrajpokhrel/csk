import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {ClubMembershipCreateComponent} from 'src/app/admin-component/club-membership-create/club-membership-create.component';

@Component({
  selector: 'app-club-membership',
  templateUrl: './club-membership.page.html',
  styleUrls: ['./club-membership.page.scss'],
})
export class ClubMembershipPage implements OnInit {
  onCreate(){
    this.dialog.open(ClubMembershipCreateComponent);
  }
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
