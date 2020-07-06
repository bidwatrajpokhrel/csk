import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nearby-explore',
  templateUrl: './nearby-explore.page.html',
  styleUrls: ['./nearby-explore.page.scss'],
})
export class NearbyExplorePage implements OnInit {

  nearbyRestaurant() {
    this.route.navigate(['/student-menu/nearby-restaurants']);
  }
  nearbyBank() {
    this.route.navigate(['/student-menu/nearby-banks']);
  }
  nearbyActivity() {
    this.route.navigate(['/student-menu/nearby-activity']);
  }
  eventGallery() {
    this.route.navigate(['/student-menu/events-gallery']);
  }

  constructor(public route: Router) { }

  ngOnInit() {
  }

}
