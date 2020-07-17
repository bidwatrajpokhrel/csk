import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-student-support',
  templateUrl: './student-support.page.html',
  styleUrls: ['./student-support.page.scss'],
})
export class StudentSupportPage implements OnInit {
  clickAlumniStories(){
    this.route.navigate(['/alumni-stories-guest']);
  }
  constructor(private route: Router, private httpService: HttpService) { }

  datas: any;
  ngOnInit() {
    this.httpService.get('/public/library-services/').subscribe((res:any)=>{
      this.datas = res.data
    })
  }

}
