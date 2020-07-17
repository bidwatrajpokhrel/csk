import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-canteen-menu-details',
  templateUrl: './canteen-menu-details.component.html',
  styleUrls: ['./canteen-menu-details.component.scss'],
})
export class CanteenMenuDetailsComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  food:any;
  ngOnInit() {
    this.storageService.get('view-canteen').then(food=>{
      this.food=food;
    });
  }

  ngOnDestroy(){
    this.storageService.removeItem('view-canteen').then(res=>console.log('removed'));
  }

}
