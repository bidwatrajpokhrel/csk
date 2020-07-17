import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lecture-schedule',
  templateUrl: './lecture-schedule.page.html',
  styleUrls: ['./lecture-schedule.page.scss'],
})
export class LectureSchedulePage implements OnInit {

  constructor(private httpService: HttpService) { }

  datas: any;
  ngOnInit() {
    this.httpService.get("/public/lecture/").subscribe((res:any)=>{
      this.datas = res.data
    })
  }

}
