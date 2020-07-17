import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';
import { HttpService } from 'src/app/services/http.service';

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
      title: 'Online Resources',
      url: '/student-menu/sources-of-support',
      icon: 'documents'
    },
    {
      title: 'Lecture Schedule',
      url: '/student-menu/lecture-schedule',
      icon: 'book'
    },
    {
      title: 'Units',
      url: '/student-menu/unit-student',
      icon: 'journal'
    },
    {
      title: 'Result',
      url: '/student-menu/result',
      icon: 'journal'
    },
    {
      title: 'Faculties',
      url: '/student-menu/faculty',
      icon: 'people'
    },
    {
      title: 'Guest Lectures',
      url: '/student-menu/guest-lectures-student',
      icon: 'calendar'
    },
    {
      title: 'ECA',
      url: '/student-menu/eca',
      icon: 'football'
    },
    {
      title: 'Clubs',
      url: '/student-menu/clubs',
      icon: 'color-palette'
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
    private storageService: StorageService,
    private httpService: HttpService,
    private router: Router,
    private loginService: LoginService
    ) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url){
        this.selectedPath = event.url;
      }
    });
  }

  student: any;
  ngOnInit() {
    this.storageService.get('userData').then(res=>{
      this.httpService.getWithToken(`/student/view-profile/${res.id}`).subscribe((r:any)=>{
        this.student = r.data[0];
      });
    });
  }

  logout(){
    this.loginService.logout();
  }

}
