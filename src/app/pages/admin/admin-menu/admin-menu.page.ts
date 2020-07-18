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
      title: 'Canteen Menu',
      url: '/admin-menu/canteen-menu',
      icon: 'fast-food'
    },
    {
      title: 'Clubs',
      url: '/admin-menu/clubs',
      icon: 'people'
    },
    // {
    //   title: 'Club Members',
    //   url: '/admin-menu/club-membership',
    //   icon: 'people-circle'
    // }
    // ,
    {
      title: 'Department',
      url: '/admin-menu/department',
      icon: 'person-circle'
    }
    ,
    {
      title: 'Extra Curricular Activity',
      url: '/admin-menu/eca',
      icon: 'football'
    }
    ,
    {
      title: 'Events',
      url: '/admin-menu/events',
      icon: 'golf'
    }
    // ,
    // {
    //   title: 'Event Bookings',
    //   url: '/admin-menu/events-booking',
    //   icon: 'pencil'
    // }
    ,
    {
      title: 'Faculties',
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
      title: 'Majors',
      url: '/admin-menu/major',
      icon: 'earth'
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
      icon: 'book'
    }
    ,
    {
      title: 'Gallery',
      url: '/admin-menu/gallery',
      icon: 'images'
    }
    ,
    {
      title: 'Talking Head',
      url: '/admin-menu/talking-head',
      icon: 'images'
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
