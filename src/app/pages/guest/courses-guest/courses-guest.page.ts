import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-courses-guest',
  templateUrl: './courses-guest.page.html',
  styleUrls: ['./courses-guest.page.scss'],
})
export class CoursesGuestPage implements OnInit {
  clickAdmissionDetails(){
    this.route.navigate(['/admission-procedure-guest']);
  }
  constructor(private route: Router, private httpService: HttpService, private storageService: StorageService) { }

  majors: any;
  ngOnInit() {
    this.httpService.get('/public/major/').subscribe((res:any)=>{
      this.majors = res.data;
    });
  }

  detail(major){
    this.storageService.store('view-major', major).then((r)=>{
      this.route.navigate(['/courses-details-guest']);
    });
  }

}
