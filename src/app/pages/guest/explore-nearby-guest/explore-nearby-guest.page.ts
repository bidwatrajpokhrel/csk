import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-explore-nearby-guest',
  templateUrl: './explore-nearby-guest.page.html',
  styleUrls: ['./explore-nearby-guest.page.scss'],
})
export class ExploreNearbyGuestPage implements OnInit {
nearbyActivity(){
this.route.navigate(['/nearby-activity-guest']);
}
nearbyBank(){
  this.route.navigate(['/nearby-banks-guest']);

}
nearbyRestaurant(){
  this.route.navigate(['/nearby-restaurant-guest']);

}
  constructor(private route: Router) { }

  ngOnInit() {
  }

}
