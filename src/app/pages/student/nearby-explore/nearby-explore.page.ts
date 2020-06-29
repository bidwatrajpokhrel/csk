import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nearby-explore',
  templateUrl: './nearby-explore.page.html',
  styleUrls: ['./nearby-explore.page.scss'],
})
export class NearbyExplorePage implements OnInit {

  nearbyRestaurant() {
    this.route.navigate(['']);
  }
  nearbyBank() {
    this.route.navigate(['']);
  }
  nearbyActivity() {
    this.route.navigate(['']);
  }
  eventGallery() {
    this.route.navigate(['/events-gallery']);
  }

  constructor(public route: Router) { }

  ngOnInit() {
  }

}
