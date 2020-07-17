import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-unit-details-info',
  templateUrl: './unit-details-info.component.html',
  styleUrls: ['./unit-details-info.component.scss'],
})
export class UnitDetailsInfoComponent implements OnInit {
clickFaculty(){
  this.route.navigate(['student-menu/faculty']);
}
closeDialog(){
  this.dialogRef.close();

}
  constructor(
    private route:Router,
    public dialogRef: MatDialogRef<UnitDetailsInfoComponent>,
    private httpService: HttpService,
    private storageService: StorageService
    ) { }

  unit: any;
  ngOnInit() {
    this.storageService.get('view-unit').then(res=>{
      this.httpService.getWithToken(`/student/unit/${res}`).subscribe((result:any)=>{
        this.unit = result.data[0];
        console.log(this.unit);
      });
    });
  }

}
