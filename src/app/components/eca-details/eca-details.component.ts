import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-eca-details',
  templateUrl: './eca-details.component.html',
  styleUrls: ['./eca-details.component.scss'],
})
export class EcaDetailsComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  eca: any;
  ngOnInit() {
    this.storageService.get('view-eca').then(res=>{
      this.eca=res;
    })
  }
  
  ngOnDestroy(){
    this.storageService.removeItem('view-eca').then(res=>{
      console.log('removed');
    })
  }

}
