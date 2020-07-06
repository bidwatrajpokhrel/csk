import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-unit-details-info',
  templateUrl: './unit-details-info.component.html',
  styleUrls: ['./unit-details-info.component.scss'],
})
export class UnitDetailsInfoComponent implements OnInit {
clickFaculty(){
  this.route.navigate(['/our-team-guest']);
}
closeDialog(){
  this.dialogRef.close();

}
  constructor(private route:Router,public dialogRef: MatDialogRef<UnitDetailsInfoComponent>) { }

  ngOnInit() {}

}
