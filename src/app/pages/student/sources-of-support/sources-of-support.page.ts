import { Component, OnInit } from '@angular/core';
import {SOSdetailsComponent} from 'src/app/components/sosdetails/sosdetails.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpSentEvent } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-sources-of-support',
  templateUrl: './sources-of-support.page.html',
  styleUrls: ['./sources-of-support.page.scss'],
})
export class SourcesOfSupportPage implements OnInit {

  clicksosDetails(item){
    this.storageService.store('sos-view', item.id).then(res=>this.dialog.open(SOSdetailsComponent));
  }
  
  constructor(private dialog: MatDialog, private httpService: HttpService, private storageService: StorageService) { }

  services: any;
  ngOnInit() {
    this.httpService.get('/public/library-services/').subscribe((result:any)=>{
      this.services=result.data;
    });
  }

}
