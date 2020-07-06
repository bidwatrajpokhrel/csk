import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-home',
  templateUrl: './guest-home.page.html',
  styleUrls: ['./guest-home.page.scss'],
})
export class GuestHomePage implements OnInit {
clickExplore(){
  this.route.navigate(['/guest-menu']);
}
clickCourses(){
  this.route.navigate(['/courses-guest']);
}
clickNews(){
  this.route.navigate(['/events-gallery-guest'])
}
  constructor(private route:Router) { }

  ngOnInit() {
  }

}
