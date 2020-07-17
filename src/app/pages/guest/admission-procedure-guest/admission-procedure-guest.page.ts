import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admission-procedure-guest',
  templateUrl: './admission-procedure-guest.page.html',
  styleUrls: ['./admission-procedure-guest.page.scss'],
})
export class AdmissionProcedureGuestPage implements OnInit {

  constructor(private httpService: HttpService) { }

  data: any
  ngOnInit() {
    this.httpService.get('/public/admission-info/221').subscribe((res:any)=>{
      this.data = res.data[0];
    });
  }

}
