import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { HttpService } from 'src/app/services/http.service';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-gallery-create',
  templateUrl: './gallery-create.component.html',
  styleUrls: ['./gallery-create.component.scss'],
})

export class GalleryCreateComponent implements OnInit {

  data = {
    description: ''
  }

  editData: any;
  message: string;

  constructor(private httpService:HttpService,
    private alertService: AlertService,
    private toastService: ToastService,
    private storageService: StorageService) { }

  faculties: any;
  ngOnInit() {
    this.storageService.get('editGallery').then(res=>{
      this.editData = res;
      this.data.description=this.editData.description;
    });
  }


  onCreate(){
    console.log(this.data);
    this.httpService.postWithToken('/admin/gallery-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.message = "Description: " + result.description; 
        this.alertService.presentAlert("Data inserted Successfully", "Gallery added", this.message);
        this.toastService.presentToast("Gallery Added <br>" + this.message)
        this.clear();
      }
    }, error => {
      console.log(error);
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

  clear(){
    this.data.description='';
  }

  ngOnDestroy(){
    this.storageService.removeItem('editGallery').then(res=>console.log('removed'));
    window.location.reload();
  }

  onEdit(){
    this.httpService.postWithToken(`/admin/gallery-edit/${this.editData.id}`, this.data).subscribe((result:any)=>{
      this.message = "Description: " + result.description; 
      this.alertService.presentAlert("Data edited Successfully", "Gallery edited", this.message);
      this.toastService.presentToast("Gallery Edited <br>" + this.message)
      this.clear();
    },
    error=>{
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

}
