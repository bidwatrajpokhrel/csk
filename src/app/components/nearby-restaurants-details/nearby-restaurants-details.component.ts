import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-nearby-restaurants-details',
  templateUrl: './nearby-restaurants-details.component.html',
  styleUrls: ['./nearby-restaurants-details.component.scss'],
})
export class NearbyRestaurantsDetailsComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  restaurants:any;
  ngOnInit() {
    this.httpService.get('/public/nearby-restaurants/').subscribe((result:any)=>{
      this.restaurants=result.data;
      console.log(this.restaurants)
    })
  }
}
