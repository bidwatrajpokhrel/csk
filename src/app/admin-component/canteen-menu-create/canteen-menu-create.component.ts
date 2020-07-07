import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { HttpService } from 'src/app/services/http.service';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-canteen-menu-create',
  templateUrl: './canteen-menu-create.component.html',
  styleUrls: ['./canteen-menu-create.component.scss'],
})
export class CanteenMenuCreateComponent implements OnInit {
  numericOnly(event): boolean { // restrict e,+,-,E characters in  input type number
    debugger
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 101 || charCode == 69 || charCode == 45 || charCode == 43) {
      return false;
    }
    return true;

  } 

  data = {
    name: '',
    price:'',
    description: ''
  }

  editData:any;

  message: string;

  constructor(private httpService:HttpService,
    private alertService: AlertService,
    private toastService: ToastService,
    private storageService: StorageService) { }

  units: any;
  ngOnInit() {
    this.storageService.get('editCanteenMenu').then(res=>{
      this.editData=res;
      this.data.name=this.editData.name;
      this.data.price=this.editData.price;
      this.data.description=this.editData.description;
    });
  }


  onCreate(){
    console.log(this.data);
    this.httpService.postWithToken('/admin/canteen-menu-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.message = "Name: " + result.food_name + "<br> Price: " + result.food_price + "<br> Description: " + result.food_description; 
        this.alertService.presentAlert("Data inserted Successfully", "Food Item added", this.message);
        this.toastService.presentToast("Food Item Added <br>" + this.message)
        this.clear();
      }
    }, error => {
      console.log(error);
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

  clear(){
    this.data.description='';
    this.data.name='';
    this.data.price='';

  }

  ngOnDestroy(){
    window.location.reload()
    this.storageService.removeItem('editCanteenMenu').then(res=>console.log('removed'));
  }

  onEdit(){
    this.httpService.postWithToken(`/admin/canteen-menu-edit/${this.editData.id}`, this.data).subscribe((result:any)=>{
      this.message = "Name: " + result.name + "<br> Price: " + result.price + "<br> Description: " + result.description; 
      this.alertService.presentAlert("Data inserted Successfully", "Food Item edited", this.message);
      this.toastService.presentToast("Food Item Edited <br>" + this.message)
      this.clear();
    },
    error=>{
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

}
