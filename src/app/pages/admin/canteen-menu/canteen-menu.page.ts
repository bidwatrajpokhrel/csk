import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {CanteenMenuCreateComponent} from 'src/app/admin-component/canteen-menu-create/canteen-menu-create.component';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-canteen-menu',
  templateUrl: './canteen-menu.page.html',
  styleUrls: ['./canteen-menu.page.scss'],
})
export class CanteenMenuPage implements OnInit {

  displayedColumns: string[] = ['foodId', 'foodName', 'foodAbout','foodPrice', 'foodAvailable','Image', 'editImage','actions'];
  
  onCreate(){
    this.dialog.open(CanteenMenuCreateComponent);
  }

  listData: any;
  constructor(private dialog: MatDialog, private httpService: HttpService,
    private storageService: StorageService, private toastService: ToastService) { }

  ngOnInit() {
    this.httpService.get('/public/canteen-menu').subscribe((result:any)=> {
      console.log(result);
      this.listData = result.data;
    });
  }

  selectedFile = null;
  onFileSelected(event, id){
    this.selectedFile = event.target.files[0];
    this.onUpload(id);
  }
  onUpload(id){
    this.httpService.post(`/image/food_image/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }

  make_unavailable(id){
    this.httpService.postWithTokenEmpty(`/admin/canteen-menu-unavailable/${id}`).subscribe((result:any)=>{
      window.location.reload();
    });
  }

  make_available(id){
    this.httpService.postWithTokenEmpty(`/admin/canteen-menu-available/${id}`).subscribe((result:any)=>{
      window.location.reload();
    });
  }

  onEdit(editData){
    this.storageService.store('editCanteenMenu', editData).then(res=>{
      this.dialog.open(CanteenMenuCreateComponent);
    });
  }

  onDelete(id){
    this.httpService.postWithTokenEmpty(`/admin/canteen-menu-delete/${id.id}`).subscribe(res=>{
      this.toastService.presentToast('Content Deleted');
      window.location.reload();
    },error=>{
      this.toastService.presentToast('Something went wrong. Check that field has no dependencies')
    });
    }
}
