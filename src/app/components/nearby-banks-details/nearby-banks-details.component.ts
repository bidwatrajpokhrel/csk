import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-nearby-banks-details',
  templateUrl: './nearby-banks-details.component.html',
  styleUrls: ['./nearby-banks-details.component.scss'],
})
export class NearbyBanksDetailsComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  banks:any;
  ngOnInit() {
    this.httpService.get('/public/nearby_banks').subscribe((result: any)=>{
      this.banks=result.data;
      console.log(this.banks)
    });
  }

}
