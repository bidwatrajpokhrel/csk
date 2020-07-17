import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-alumni-stories-guest',
  templateUrl: './alumni-stories-guest.page.html',
  styleUrls: ['./alumni-stories-guest.page.scss'],
})
export class AlumniStoriesGuestPage implements OnInit {

  constructor(private httpService: HttpService) { }

  alumnis: any;
  ngOnInit() {
    this.httpService.get('/public/alumni-stories').subscribe((res:any)=>{
      this.alumnis = res.data;
    })
  }

}
