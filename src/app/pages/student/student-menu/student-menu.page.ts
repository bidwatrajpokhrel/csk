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
      title: 'Sources of Support',
      url: '/student-menu/sources-of-support',
      icon: 'people'
    },
    {
      title: 'Lecture Schedule',
      url: '/student-menu/lecture-schedule',
      icon: 'book'
    },
    {
      title: 'Guest Lectures',
      url: '/folder/Guest Lectures',
      icon: 'man'
    },
    {
      title: 'Clubs',
      url: '/student-menu/clubs',
      icon: 'add'
    },
    {
      title: 'Events',
      url: '/student-menu/events',
      icon: 'calendar'
    },
    {
      title: 'Fees and Offers',
      url: '/folder/Fees and Offers',
      icon: 'cash'
    },
    {
      title: 'Places to Explore Nearby',
      url: '/folder/Places to Explore Nearby',
      icon: 'walk'
    },
    {
      title: 'Canteen Services',
      url: '/folder/Canteen Services',
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
