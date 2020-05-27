import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { PublicEventService } from 'src/app/services/public/public-event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage {
  information: any[];
  automaticClose = false;

  constructor(
    private storageService: StorageService,
    private publicEventService: PublicEventService,
    private router: Router,
    private authService: LoginService
  ) {
    // this.http.get('assets/information.json').subscribe(res =>{
    //   this.information = res['items'];

    //   this.information[0].open = true;
    // });
   }

   ngOnInit(){
     this.publicEventService.getEvents().subscribe(res => {
      this.information = res.data;

      this.information[0].open = true;
     });
   }

  toggleSection(index) {
    this.information[index].open =!this.information[index].open;

    if (this.automaticClose && this.information[index].open){
      this.information
      .filter((item,itemIndex) => itemIndex != index)
      .map(item => item.open = false);
    }

  }

  toggleItem(index, childIndex){
    this.information[index].children[childIndex].open=!this.information[index].children[childIndex].open;

  }
  

}
