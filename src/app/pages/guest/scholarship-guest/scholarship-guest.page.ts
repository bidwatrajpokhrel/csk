import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-scholarship-guest',
  templateUrl: './scholarship-guest.page.html',
  styleUrls: ['./scholarship-guest.page.scss'],
})
export class ScholarshipGuestPage implements OnInit {

  constructor(private httpService: HttpService) { }

  scholarship:any;
  data:any;
  ngOnInit() {
    this.httpService.get('/public/admission-info/241').subscribe((r:any)=>{
      this.scholarship = r.data[0]
      this.httpService.get('/public/gallery/4').subscribe((res:any)=>{
        this.data = res.data[0]
      })
    })
  }
}
