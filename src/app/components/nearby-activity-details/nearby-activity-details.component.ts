import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-nearby-activity-details',
  templateUrl: './nearby-activity-details.component.html',
  styleUrls: ['./nearby-activity-details.component.scss'],
})
export class NearbyActivityDetailsComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  activities: any;
  ngOnInit() {
    this.httpService.get('/public/nearby-activities/').subscribe((result:any)=>{
      this.activities= result.data;
      console.log(this.activities);
    });    
  }

}
