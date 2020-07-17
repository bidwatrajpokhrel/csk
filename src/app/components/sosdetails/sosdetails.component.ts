import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-sosdetails',
  templateUrl: './sosdetails.component.html',
  styleUrls: ['./sosdetails.component.scss'],
})
export class SOSdetailsComponent implements OnInit {

  constructor(private httpService:HttpService, private storageService: StorageService) { }

  service:any;
  ngOnInit() {
    this.storageService.get('sos-view').then(res=>{
      this.httpService.get(`/public/library-services/${res}`).subscribe((result:any)=>{
        this.service = result.data[0];
      })
    })
  }

  ngOnDestroy(){
    this.storageService.removeItem('sos-view').then(res=>{
      console.log('removed');
    })
  }
}
