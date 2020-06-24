import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canteen-menu-create',
  templateUrl: './canteen-menu-create.component.html',
  styleUrls: ['./canteen-menu-create.component.scss'],
})
export class CanteenMenuCreateComponent implements OnInit {
  numericOnly(event): boolean { // restrict e,+,-,E characters in  input type number
    debugger
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 101 || charCode == 69 || charCode == 45 || charCode == 43) {
      return false;
    }
    return true;

  } 
  constructor() { }

  ngOnInit() {}

}
