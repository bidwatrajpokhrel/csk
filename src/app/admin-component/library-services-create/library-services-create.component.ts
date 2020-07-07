import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-library-services-create',
  templateUrl: './library-services-create.component.html',
  styleUrls: ['./library-services-create.component.scss'],
})
export class LibraryServicesCreateComponent implements OnInit {

  data = {
    name: '',
    description: ''
  }

  editData:any;
  message: string;

  constructor(private httpService:HttpService,
    private alertService: AlertService,
    private toastService: ToastService,
    private storageService: StorageService) { }


  ngOnInit() {
    this.storageService.get('editLibraryService').then(res=>{
      this.editData = res;
      this.data.name = this.editData.name;
      this.data.description = this.editData.description;
    });
  }


  onCreate(){
    console.log(this.data);
    this.httpService.postWithToken('/admin/library-services-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.message = "Name: " + result.name + "<br> Description: " + result.description; 
        this.alertService.presentAlert("Data inserted Successfully", "Library Service added", this.message);
        this.toastService.presentToast(" Library Service Added <br>" + this.message)
        this.clear();
      }
    }, error => {
      console.log(error);
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

  clear(){
    this.data.description='';
    this.data.name=''
  }

  ngOnDestroy(){
    this.storageService.removeItem('editLibraryService').then(res=>console.log('removed'));
    window.location.reload()
  }

  onEdit(){
    this.httpService.postWithToken(`/admin/library-services-edit/${this.editData.id}`, this.data).subscribe((result:any)=>{
      this.message = "Name: " + result.name + "<br> Description: " + result.description; 
      this.alertService.presentAlert("Data inserted Successfully", "Library Service edited", this.message);
      this.toastService.presentToast(" Library Service Edited <br>" + this.message)
      this.clear();
    },
    error=>{
      this.toastService.presentToast("An error occured. Please try again");
    });
  }


}
