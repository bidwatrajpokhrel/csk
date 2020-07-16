import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-home',
  templateUrl: './guest-home.page.html',
  styleUrls: ['./guest-home.page.scss'],
})
export class GuestHomePage implements OnInit {
  onClick(){
    this.router.navigate(['/guest-home']);
  }
  clickAboutUs(){
    this.router.navigate(['/guest-menu']);
  }

  clickAboutUniversity(){
    this.router.navigate(['/about-university-guest']);
  }

  clickRecognitions(){
    this.router.navigate(['/recognition-guest']);

  }
  clickMessages(){
    this.router.navigate(['/messages-guest']);

  }
  clickImageGallery(){
    this.router.navigate(['/events-gallery-guest']);

  }
  clickFacilities(){
    this.router.navigate(['/facilities-guest']);

  }
  clickOurTeam (){
    this.router.navigate(['/our-team-guest']);

  }
  clickAlumniStories(){
    this.router.navigate(['/alumni-stories-guest']);

  }
  clickHolidaysList(){
    this.router.navigate(['/holidays-list-guest']);

  }
  clickIntakeCalender(){
    this.router.navigate(['/intake-calender-guest']);

  }
  clickAdmissionProcedure(){
    this.router.navigate(['/admission-procedure-guest']);

  }
  clickFeeStructure(){
    this.router.navigate(['/fee-structure-guest']);

  }
  clickScholarship(){
    this.router.navigate(['/scholarship-guest']);

  }
  clickStudentSupport(){
    this.router.navigate(['/student-support']);

  }
  clickEvents(){
    this.router.navigate(['/events-guest']);

  }
  clickNearbyExplore(){
    this.router.navigate(['/explore-nearby-guest']);

  }
  clickNews(){
    this.router.navigate(['/news-guest']);

  }
  clickCanteen(){
    this.router.navigate(['/canteen-menu-guest']);

  }
  clickCourses(){
    this.router.navigate(['/courses-guest']);

  }
  clickLogin(){
    this.router.navigate(['/login']);
  }
  constructor(private router :Router) { }

  ngOnInit() {
  }

}
