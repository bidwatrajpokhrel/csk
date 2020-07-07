import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {NearbyActivitiesCreateComponent} from 'src/app/admin-component/nearby-activities-create/nearby-activities-create.component';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

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

  constructor(private dialog: MatDialog, private httpService: HttpService, private storageService: StorageService, private toastService: ToastService) { }

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
    });
  }

  onEdit(data){
    this.storageService.store('editActivities', data).then(res=>this.dialog.open(NearbyActivitiesCreateComponent));
  }

  onDelete(id){
    this.httpService.postWithTokenEmpty(`/admin/nearby-activities-delete/${id.id}`).subscribe(res=>{
      this.toastService.presentToast('Content Deleted');
      window.location.reload();
    },error=>{
      this.toastService.presentToast('Something went wrong. Check that field has no dependencies')
    });
  }
}
