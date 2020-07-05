import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';

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
  editData: any;
  message: string;
 
  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService, private storageService: StorageService) { }


  ngOnInit() {
    this.storageService.get('editBanks').then(res=>{
      this.editData=res;
      this.data.name=this.editData.name;
      this.data.address=this.editData.address;
      this.data.description=this.editData.description;
      this.data.branch=this.editData.branch;
      this.data.offers=this.editData.offer;
    })
  }

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
    this.storageService.removeItem('editBanks').then(res=>console.log('removed'));
    window.location.reload()
  }

  onEdit(){
    this.httpService.postWithToken(`/admin/nearby-banks-edit/${this.editData.id}`, this.data).subscribe((result:any)=>{
      this.message = "Name: " + result.name + "<br>" + "Offer: " + result.offer + "<br>Description: " + result.description+ "<br>Address: " + result.address+ "<br>Branch: " + result.branch;
        this.alertService.presentAlert("Data inserted Successfully", "Bank created",this.message);
        this.toastService.presentToast("Successfully created Bank<br>" + this.message)
        this.clear;
    },
    error=>{
      this.toastService.presentToast("An error occured. Please try again");
    });
  }
}
