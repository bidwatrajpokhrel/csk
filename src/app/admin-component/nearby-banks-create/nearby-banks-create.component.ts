import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-nearby-banks-create',
  templateUrl: './nearby-banks-create.component.html',
  styleUrls: ['./nearby-banks-create.component.scss'],
})
export class NearbyBanksCreateComponent implements OnInit {

  data = {
    name: '',
    offers:'',
    description:'',
    address: '',
    branch:''
  }
  message: string;
 
  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService) { }


  ngOnInit() { }

  onCreate(){
    this.httpService.postWithToken('/admin/nearby-banks-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.message = "Name: " + result.name + "<br>" + "Offer: " + result.offers + "<br>Description: " + result.description+ "<br>Address: " + result.address+ "<br>Branch: " + result.branch;
        this.alertService.presentAlert("Data inserted Successfully", "Bank created",this.message);
        this.toastService.presentToast("Successfully created Bank<br>" + this.message)
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
    this.data.address='';
    this.data.branch='';
  }

  ngOnDestroy(){
    //window.location.reload()
  }
}
