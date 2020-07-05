import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-ecacreate',
  templateUrl: './ecacreate.component.html',
  styleUrls: ['./ecacreate.component.scss'],
})
export class ECACreateComponent implements OnInit {

  data = {
    name: '',
    description: '',
    incharge: ''

  }
  editData: any;
  message: string;

  constructor(private httpService:HttpService,
    private alertService: AlertService,
    private toastService: ToastService,
    private storageService: StorageService) { }

  faculties: any;
  ngOnInit() {
    this.httpService.get('/public/faculty/').subscribe((result: any)=>{
      this.faculties = result.data;
      this.storageService.get('editECA').then(res=>{
        this.editData = res;
        this.data.name = this.editData.name;
        this.data.description=this.editData.description;
        this.data.incharge=this.editData.incharge.id;
      });
    });
  }


  onCreate(){
    console.log(this.data);
    this.httpService.postWithToken('/admin/eca-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.message = "Name: " + result.name + "<br> Incharge: " + result.incharge + "<br> Description: " + result.description; 
        this.alertService.presentAlert("Data inserted Successfully", "ECA added", this.message);
        this.toastService.presentToast("ECA Added <br>" + this.message)
        this.clear();
      }
    }, error => {
      console.log(error);
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

  clear(){
    this.data.description='';
    this.data.name='',
    this.data.incharge=''
  }

  ngOnDestroy(){
    this.storageService.removeItem('editECA').then(res=>console.log('removed'));
    window.location.reload();
  }

  onEdit(){
    this.httpService.postWithToken(`/admin/eca-edit/${this.editData.id}`, this.data).subscribe((result:any)=>{
      this.message = "Name: " + result.name + "<br> Incharge: " + result.incharge + "<br> Description: " + result.description; 
      this.alertService.presentAlert("Data edited Successfully", "ECA edited", this.message);
      this.toastService.presentToast("ECA Edited <br>" + this.message)
      this.clear();
    },
    error=>{
      this.toastService.presentToast("An error occured. Please try again")
    });
  }


}
