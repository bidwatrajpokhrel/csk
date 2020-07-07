import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-nearby-activities-create',
  templateUrl: './nearby-activities-create.component.html',
  styleUrls: ['./nearby-activities-create.component.scss'],
})
export class NearbyActivitiesCreateComponent implements OnInit {

  data = {
    name: '',
    offers:'',
    description:''
  }
  editData: any;
  message: string;
 
  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService, private storageService: StorageService) { }


  ngOnInit() {
    this.storageService.get('editActivities').then(res=>{
      this.editData=res;
      this.data.name=this.editData.name;
      this.data.offers=this.editData.offers;
      this.data.description=this.editData.description;
    });
  }

  onCreate(){
    this.httpService.postWithToken('/admin/nearby-activities-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.message = "Name: " + result.name + "<br>" + "Offer: " + result.offer + "<br>Description: " + result.description;
        this.alertService.presentAlert("Data inserted Successfully", "Activity created",this.message);
        this.toastService.presentToast("Successfully created Activity <br>" + this.message)
        this.clear;
      }
    }, error => {
      this.toastService.presentToast("An error occured. Please try again");
      console.log(error)
    });
  }

  clear(){
    this.data.name = '';
    this.data.offers='';
    this.data.description='';
  }

  ngOnDestroy(){
    this.storageService.removeItem('editActivities').then(res=>console.log('result'));
    window.location.reload();
  }

  onEdit(){
    this.httpService.postWithToken(`/admin/nearby-activities-edit/${this.editData.id}`, this.data).subscribe((result:any)=>{
      this.message = "Name: " + result.name + "<br>" + "Offer: " + result.offer + "<br>Description: " + result.description;
        this.alertService.presentAlert("Data inserted Successfully", "Activity edited",this.message);
        this.toastService.presentToast("Successfully edited Activity <br>" + this.message)
        this.clear;
    },
    error=>{
      this.toastService.presentToast("An error occured. Please try again");
    });
  }

}
