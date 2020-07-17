import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-guest-lectures-details',
  templateUrl: './guest-lectures-details.component.html',
  styleUrls: ['./guest-lectures-details.component.scss'],
})
export class GuestLecturesDetailsComponent implements OnInit {

  constructor(private dialog:MatDialog, private storageService: StorageService) { }

  guest:any;
  ngOnInit() {
    this.storageService.get('view-guest').then(res=>{
      this.guest= res;
    });
  }

  ngOnDestroy(){
    this.storageService.removeItem('view-guest').then(res=>{
      console.log('removed');
    })
  }

}
