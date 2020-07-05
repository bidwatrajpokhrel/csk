import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {RestaurantsNearbyCreateComponent} from 'src/app/admin-component/restaurants-nearby-create/restaurants-nearby-create.component';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-restaurants-nearby',
  templateUrl: './restaurants-nearby.page.html',
  styleUrls: ['./restaurants-nearby.page.scss'],
})
export class RestaurantsNearbyPage implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'offers', 'details','address','image', 'editImage', 'actions'];

  onCreate(){
    this.dialog.open(RestaurantsNearbyCreateComponent);
  }
  constructor(private dialog: MatDialog, private httpService:HttpService, private storageService: StorageService, private toastService: ToastService) { }

  selectedFile = null;
  onFileSelected(event, id){
    this.selectedFile = event.target.files[0];
    this.onUpload(id);
  }
  onUpload(id){
    this.httpService.post(`/image/nearby_restaurant/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }

  listData: any;
  ngOnInit() {
    this.httpService.getWithToken('/public/nearby-restaurants/').subscribe((result: any)=>{
      this.listData = result.data;
      console.log(result)
    })
  }

  onEdit(data){
    this.storageService.store('editRestaurant', data).then(res=>this.dialog.open(RestaurantsNearbyCreateComponent));
  }

  onDelete(id){
    this.httpService.postWithTokenEmpty(`/admin/nearby-restaurants-delete/${id.id}`).subscribe(res=>{
      this.toastService.presentToast('Content Deleted');
      window.location.reload();
    },error=>{
      this.toastService.presentToast('Something went wrong. Check that field has no dependencies')
    });
  }

}
