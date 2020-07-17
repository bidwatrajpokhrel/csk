import { Component, OnInit } from '@angular/core';
import {CanteenMenuDetailsComponent} from 'src/app/components/canteen-menu-details/canteen-menu-details.component';
import {MatDialog} from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-canteen-menu',
  templateUrl: './canteen-menu.component.html',
  styleUrls: ['./canteen-menu.component.scss'],
})
export class CanteenMenuComponent implements OnInit {
  onClick(row){
    this.storageService.store('view-canteen', row).then(res=>this.dialog.open(CanteenMenuDetailsComponent));    
  }
  constructor(private dialog:MatDialog,
    private httpService: HttpService,
    private storageService: StorageService) { }

  foods:any;
  ngOnInit() {
    this.httpService.get('/public/canteen-menu/').subscribe((result:any)=>{
      this.foods=result.data;
    });
  }

}
