import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.scss'],
})
export class FacultyDetailsComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  faculty:any;
  ngOnInit() {
    this.storageService.get('view-faculty').then(res=>{
      this.faculty = res;
      console.log(this.faculty)
    });
  }

}
