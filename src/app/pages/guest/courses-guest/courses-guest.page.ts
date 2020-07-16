import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-guest',
  templateUrl: './courses-guest.page.html',
  styleUrls: ['./courses-guest.page.scss'],
})
export class CoursesGuestPage implements OnInit {
  clickAdmissionDetails(){
    this.route.navigate(['/admission-procedure-guest']);
  }
  constructor(private route: Router) { }

  ngOnInit() {
  }

}
