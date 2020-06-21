import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.page.html',
  styleUrls: ['./admin-menu.page.scss'],
})
export class AdminMenuPage implements OnInit {

  adminPages = [
    {
      title: 'Admission Info',
      url: '/admin-menu/admission-info-table',
      icon: 'person-add'
    },
    {
      title: 'Assessment',
      url: '/admin-menu/assessment',
      icon: 'reader'
    },
    {
      title: 'Library Books',
      url: '/admin-menu/books-in-library',
      icon: 'library'
    },
    {
      title: 'Student-Book Library',
      url: '/admin-menu/student-library-books',
      icon: 'calendar'
    },
    {
      title: 'Canteen Menu',
      url: '/admin-menu/canteen-menu',
      icon: 'fast-food'
    },
    {
      title: 'Clubs',
      url: '/admin-menu/clubs',
      icon: 'people'
    },
    {
      title: 'Club Membership',
      url: '/admin-menu/club-membership',
      icon: 'people-circle'
    }
    ,
    {
      title: 'Department',
      url: '/admin-menu/department',
      icon: 'person-circle'
    }
    ,
    {
      title: 'Extra Curricular Activity',
      url: '/admin-menu/eca',
      icon: 'walk'
    }
    ,
    {
      title: 'Employee',
      url: '/admin-menu/employee-details',
      icon: 'add'
    }
    ,
    {
      title: 'Events',
      url: '/admin-menu/events',
      icon: 'bicycle'
    }
    ,
    {
      title: 'Events Booking',
      url: '/admin-menu/events-booking',
      icon: 'bicycle-add'
    }
    ,
    {
      title: 'Faculty',
      url: '/admin-menu/faculty',
      icon: 'podium'
    }
    ,
    {
      title: 'Guest Lectures',
      url: '/admin-menu/guest-lectures',
      icon: 'laptop'
    }
    ,
    {
      title: 'Library Services',
      url: '/admin-menu/library-services',
      icon: 'library'
    }
    ,
    {
      title: 'Course Major',
      url: '/admin-menu/major',
      icon: 'restaurant'
    }
    ,
    {
      title: 'Nearby Activities',
      url: '/admin-menu/nearby-activities',
      icon: 'restaurant'
    }
    ,
    {
      title: 'Nearby Banks',
      url: '/admin-menu/nearby-banks',
      icon: 'business'
    }
    ,
    {
      title: 'Notice',
      url: '/admin-menu/notice',
      icon: 'alert-circle'
    }
    ,
    {
      title: 'Restaurants Nearby',
      url: '/admin-menu/restaurants-nearby',
      icon: 'restaurant'
    }
    ,
    {
      title: 'Result',
      url: '/admin-menu/result',
      icon: 'checkmark-done-circle'
    }
    ,
    {
      title: 'Student',
      url: '/admin-menu/student',
      icon: 'happy'
    }
    ,
    {
      title: 'Unit',
      url: '/admin-menu/unit',
      icon: 'restaurant'
    }
    

  ];

  selectedPath = '';


  constructor(
    private router: Router,
    private loginService: LoginService
    ) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url){
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {}

  logout(){
    this.loginService.logout();
  }
}
