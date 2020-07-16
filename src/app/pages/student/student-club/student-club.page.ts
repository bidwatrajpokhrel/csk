import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-club',
  templateUrl: './student-club.page.html',
  styleUrls: ['./student-club.page.scss'],
})
export class StudentClubPage implements OnInit {
  clickSeeAllEvents(){
    this.router.navigate(['/all-event-student'])
  }
  constructor(    private router: Router,
    ) { }

  ngOnInit() {
  }

}
