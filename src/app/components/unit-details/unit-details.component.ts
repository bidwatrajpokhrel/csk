import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {UnitDetailsInfoComponent} from '../../components/unit-details-info/unit-details-info.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.scss'],
})
export class UnitDetailsComponent implements OnInit {
clickUnitDetails(){
this.dialog.open(UnitDetailsInfoComponent);
}
clickOurTeam(){
 this.route.navigate(['/our-team-guest']);
}

  constructor(private dialog: MatDialog, private route:Router) { }

  ngOnInit() {}

}
