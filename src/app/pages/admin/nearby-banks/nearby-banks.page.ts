import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {NearbyBanksCreateComponent} from 'src/app/admin-component/nearby-banks-create/nearby-banks-create.component';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-nearby-banks',
  templateUrl: './nearby-banks.page.html',
  styleUrls: ['./nearby-banks.page.scss'],
})
export class NearbyBanksPage implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'offer', 'details','branch','address','image', 'editImage', 'actions'];
  onCreate(){
    this.dialog.open(NearbyBanksCreateComponent);
  }
  constructor(private dialog: MatDialog, private httpService:HttpService, private storageService: StorageService, private toastService: ToastService) { }

  selectedFile = null;
  onFileSelected(event, id){
    this.selectedFile = event.target.files[0];
    this.onUpload(id);
  }
  onUpload(id){
    this.httpService.post(`/image/nearby_banks/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }

  listData: any;
  ngOnInit() {
    this.httpService.getWithToken('/public/nearby_banks/').subscribe((result: any)=>{
      this.listData = result.data;
      console.log(result)
    })
  }

  onEdit(data){
    this.storageService.store('editBanks',data).then(res=>this.dialog.open(NearbyBanksCreateComponent));
  }

  onDelete(id){
    this.httpService.postWithTokenEmpty(`/admin/nearby-banks-delete/${id.id}`).subscribe(res=>{
      this.toastService.presentToast('Content Deleted');
      window.location.reload();
    },error=>{
      this.toastService.presentToast('Something went wrong. Check that field has no dependencies')
    });
  }

}
