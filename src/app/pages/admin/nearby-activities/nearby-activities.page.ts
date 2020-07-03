import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {NearbyActivitiesCreateComponent} from 'src/app/admin-component/nearby-activities-create/nearby-activities-create.component';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-nearby-activities',
  templateUrl: './nearby-activities.page.html',
  styleUrls: ['./nearby-activities.page.scss'],
})
export class NearbyActivitiesPage implements OnInit {
  onCreate(){
    this.dialog.open(NearbyActivitiesCreateComponent);
  }

  displayedColumns: string[] = ['id', 'name', 'offers', 'details','image', 'editImage', 'actions'];

  constructor(private dialog: MatDialog, private httpService: HttpService) { }

  selectedFile = null;
  onFileSelected(event, id){
    this.selectedFile = event.target.files[0];
    this.onUpload(id);
  }
  onUpload(id){
    this.httpService.post(`/image/nearby-activities/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }

  listData: any;
  ngOnInit() {
    this.httpService.getWithToken('/public/nearby-activities/').subscribe((result: any)=>{
      this.listData = result.data;
      console.log(result)
    })
  }
}
