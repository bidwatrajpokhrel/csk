import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-menu-details',
  templateUrl: './guest-menu-details.component.html',
  styleUrls: ['./guest-menu-details.component.scss'],
})
export class GuestMenuDetailsComponent implements OnInit {
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
  clickInfrastructure(){
    this.router.navigate(['/infrastructure-guest']);

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
  clickEventsGallery(){
    this.router.navigate(['/events-gallery-guest']);

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
  constructor(private router: Router) { }

  ngOnInit() {}

}
