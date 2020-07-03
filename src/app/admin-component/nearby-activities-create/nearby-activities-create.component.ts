import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';

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
  message: string;
 
  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService) { }


  ngOnInit() { }

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
    window.location.reload()
  }

}
