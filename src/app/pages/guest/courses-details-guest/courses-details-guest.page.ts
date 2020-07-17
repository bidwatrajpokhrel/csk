import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-courses-details-guest',
  templateUrl: './courses-details-guest.page.html',
  styleUrls: ['./courses-details-guest.page.scss'],
})
export class CoursesDetailsGuestPage implements OnInit {

  constructor(private storageService: StorageService) { }

  major: any;
  ngOnInit() {
    this.storageService.get('view-major').then(r=>{
      this.major = r;
    });
  }

  ngOnDestroy(){
    this.storageService.removeItem('view-major').then(r=>console.log('removed'));
  }

}
