import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-restaurants-nearby-create',
  templateUrl: './restaurants-nearby-create.component.html',
  styleUrls: ['./restaurants-nearby-create.component.scss'],
})
export class RestaurantsNearbyCreateComponent implements OnInit {

  data = {
    name: '',
    offers:'',
    description:'',
    address:''
  }
  message: string;
  editData: any;
 
  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService, private storageService: StorageService) { }


  ngOnInit() {
    this.storageService.get('editRestaurant').then(res=>{
      this.editData=res;
      this.data.name=this.editData.name;
      this.data.offers=this.editData.offer;
      this.data.description=this.editData.description;
      this.data.address=this.editData.address; 
    });
  }

  onCreate(){
    this.httpService.postWithToken('/admin/nearby-restaurants-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.message = "Name: " + result.name + "<br>" + "Offer: " + result.offers + "<br>Description: " + result.description+ "<br>Address: " + result.address;
        this.alertService.presentAlert("Data inserted Successfully", "Restaurant added",this.message);
        this.toastService.presentToast("Successfully created Restaurant<br>" + this.message)
        this.clear();
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
  }

  ngOnDestroy(){
    this.storageService.removeItem('editRestaurant').then(res=>console.log('removed'));
    window.location.reload();
  }

  onEdit(){
    this.httpService.postWithToken(`/admin/nearby-restaurants-edit/${this.editData.id}`, this.data).subscribe((result:any)=>{
      this.message = "Name: " + result.name + "<br>" + "Offer: " + result.offer + "<br>Description: " + result.description+ "<br>Address: " + result.address;
      this.alertService.presentAlert("Data inserted Successfully", "Restaurant Edited",this.message);
      this.toastService.presentToast("Successfully Edited Restaurant<br>" + this.message)
      this.clear();
    },
    error=>{
      this.toastService.presentToast("An error occured. Please try again");
    });
  }
}
