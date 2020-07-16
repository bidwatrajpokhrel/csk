import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fee-structure-guest',
  templateUrl: './fee-structure-guest.page.html',
  styleUrls: ['./fee-structure-guest.page.scss'],
})
export class FeeStructureGuestPage implements OnInit {
clickScholarshipDetails(){
this.route.navigate(['/scholarship-guest']);
}
  constructor(private route: Router) { }

  ngOnInit() {
  }

}
