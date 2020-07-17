import { Component, OnInit } from '@angular/core';
// import {NewsDetailsGuestComponent} from 'src/app/pages/guest/components-guest/news-details-guest/news-details-guest.component';
import {MatDialog} from '@angular/material/dialog';
import { EcaDetailsComponent } from 'src/app/components/eca-details/eca-details.component';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-news-guest',
  templateUrl: './news-guest.page.html',
  styleUrls: ['./news-guest.page.scss'],
})
export class NewsGuestPage implements OnInit {
  
  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private dialog: MatDialog
  ) { }

  ecas:any;
  ngOnInit() {
    this.httpService.get('/public/eca/').subscribe((result:any)=>{
      this.ecas=result.data;
    });
  }

  onClick(row){
    this.storageService.store('view-eca', row).then(res=>this.dialog.open(EcaDetailsComponent));
  }

}
