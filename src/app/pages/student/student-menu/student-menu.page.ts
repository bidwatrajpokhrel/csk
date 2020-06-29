import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.page.html',
  styleUrls: ['./student-menu.page.scss'],
})
export class StudentMenuPage implements OnInit {
  
  studentPages = [
    {
      title: 'Dashboard',
      url: '/student-menu/student-dashboard',
      icon: 'people'
    },
    {
      title: 'Sources of Support',
      url: '/student-menu/sources-of-support',
      icon: 'documents'
    },
    {
      title: 'Lecture Schedule',
      url: '/student-menu/lecture-schedule',
      icon: 'book'
    },
    {
      title: 'Guest Lectures',
      url: '/student-menu/guest-lectures-student',
      icon: 'calendar'
    },
    {
      title: 'Clubs',
      url: '/student-menu/clubs',
      icon: 'color-palette'
    },
    {
      title: 'Events',
      url: '/student-menu/events',
      icon: 'gift'
    },
    {
      title: 'Event',
      url: '/student-menu/event-student',
      icon: 'gift'
    },
    {
      title: 'Events Gallery',
      url: '/student-menu/events-gallery',
      icon: 'image'
    },
    {
      title: 'Places to Explore Nearby',
      url: '/student-menu/explore-nearby',
      icon: 'bicycle'
    },
    {
      title: 'Canteen Services',
      url: '/student-menu/canteen-menu-student',
      icon: 'fast-food'
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
