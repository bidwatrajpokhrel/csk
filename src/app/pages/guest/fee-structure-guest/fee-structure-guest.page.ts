import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-fee-structure-guest',
  templateUrl: './fee-structure-guest.page.html',
  styleUrls: ['./fee-structure-guest.page.scss'],
})
export class FeeStructureGuestPage implements OnInit {
clickScholarshipDetails(){
this.route.navigate(['/scholarship-guest']);
}
  constructor(private route: Router, private httpService: HttpService) { }

  data: any;
  ngOnInit() {
    this.httpService.get('/public/gallery/3').subscribe((res:any)=>{
      this.data = res.data[0]
    })
  }

}
