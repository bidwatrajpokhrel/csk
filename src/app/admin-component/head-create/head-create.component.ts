import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-head-create',
  templateUrl: './head-create.component.html',
  styleUrls: ['./head-create.component.scss'],
})
export class HeadCreateComponent implements OnInit {

  data = {
    name: '',
    talk: '',
    titles:'',
    type:''
  }

  editData: any;

  constructor(private httpService:HttpService,
    private alertService: AlertService,
    private toastService: ToastService,
    private storageService: StorageService) { }

  faculties: any;
  ngOnInit() {
    this.storageService.get('editHead').then(res=>{
      this.editData = res;
      this.data.name=this.editData.name;
      this.data.talk=this.editData.talk;
      this.data.titles=this.editData.titles;
      this.data.type=this.editData.type;
    });
  }


  onCreate(){
    console.log(this.data);
    this.httpService.postWithToken('/admin/taking-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.alertService.presentAlert("Data inserted Successfully", "Talking Head added", 'Success');
        this.toastService.presentToast("Talking Head Added <br>" + 'Success')
        this.clear();
      }
    }, error => {
      console.log(error);
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

  clear(){
    this.data.name='';
    this.data.talk='';
    this.data.titles='';
    this.data.type='';
  }

  ngOnDestroy(){
    this.storageService.removeItem('editHead').then(res=>console.log('removed'));
    window.location.reload();
  }

  onEdit(){
    this.httpService.postWithToken(`/admin/talking-edit/${this.editData.id}`, this.data).subscribe((result:any)=>{
      this.alertService.presentAlert("Data inserted Successfully", "Talking Head added", 'Success');
        this.toastService.presentToast("Talking Head Added <br>" + 'Success')
        this.clear();
    },
    error=>{
      this.toastService.presentToast("An error occured. Please try again")
    });
  }
}
