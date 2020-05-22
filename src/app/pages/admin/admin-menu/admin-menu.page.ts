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
      title: 'Clubs',
      url: '/adminmenu/clubs',
      icon: 'people'
    },
    {
      title: 'Lecture Schedule',
      url: '/folder/Lecture Schedule',
      icon: 'book'
    },
    {
      title: 'Guest Lectures',
      url: '/folder/Guest Lectures',
      icon: 'man'
    },
    {
      title: 'My Clubs and Events',
      url: '/folder/My Clubs and Events',
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
