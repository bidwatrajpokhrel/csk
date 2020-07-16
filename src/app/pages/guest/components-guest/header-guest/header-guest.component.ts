import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header-guest',
  templateUrl: './header-guest.component.html',
  styleUrls: ['./header-guest.component.scss'],
})
export class HeaderGuestComponent implements OnInit {
clickHome(){
  this.route.navigate(['/guest-home']);
}
clickLogin(){
  this.route.navigate(['/login']);
}
  constructor( private route:Router) { }

  ngOnInit() {}

}
