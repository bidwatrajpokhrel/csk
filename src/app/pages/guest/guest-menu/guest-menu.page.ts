import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-guest-menu',
  templateUrl: './guest-menu.page.html',
  styleUrls: ['./guest-menu.page.scss'],
})
export class GuestMenuPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private httpService: HttpService) {

  }

  faculties: any;
  about: any;
  journey: any;
  ngOnInit() {
    this.httpService.get('/public/admission-info/202').subscribe((res:any)=>{
      this.about = res.data[0];
      this.httpService.get('/public/admission-info/203').subscribe((result:any)=>{
        this.journey = result.data[0];
        this.httpService.get('/public/faculty/').subscribe((r:any)=>{
          this.faculties = r.data;
        });
      });
    });
  }

}
