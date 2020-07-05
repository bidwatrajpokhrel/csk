import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {MajorCreateComponent} from 'src/app/admin-component/major-create/major-create.component';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-major',
  templateUrl: './major.page.html',
  styleUrls: ['./major.page.scss'],
})
export class MajorPage implements OnInit {

  displayedColumns: string[] = ['majorId', 'majorName', 'majorQualification', 'majorHead', 'majorImage', 'editImage', 'majorUnits', 'actions'];

  onCreate(){
    this.dialog.open(MajorCreateComponent);
  }
  constructor(private dialog: MatDialog, private httpService:HttpService, private storageService:StorageService, private toastService: ToastService) { }

  listData: any;
  ngOnInit() {
    this.httpService.get('/public/major').subscribe((result: any)=>{
      this.listData = result.data;
    })
  }

  selectedFile = null;
  onFileSelected(event, id){
    this.selectedFile = event.target.files[0];
    this.onUpload(id);
  }
  onUpload(id){
    this.httpService.post(`/image/major/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }

  onEdit(editData){
    this.storageService.store('editMajor', editData).then(res=>{
      this.dialog.open(MajorCreateComponent);
    });
  }

  onDelete(id){
    this.httpService.postWithTokenEmpty(`/admin/major-delete/${id.id}`).subscribe(res=>{
      this.toastService.presentToast('Content Deleted');
      window.location.reload();
    },error=>{
      this.toastService.presentToast('Something went wrong. Check that field has no dependencies')
    });
  }
}
