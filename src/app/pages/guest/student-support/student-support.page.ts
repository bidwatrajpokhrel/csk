import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-support',
  templateUrl: './student-support.page.html',
  styleUrls: ['./student-support.page.scss'],
})
export class StudentSupportPage implements OnInit {
  clickAlumniStories(){
    this.route.navigate(['/alumni-stories-guest']);
  }
  constructor(private route: Router) { }

  ngOnInit() {
  }

}
