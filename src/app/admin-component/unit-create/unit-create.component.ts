import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-unit-create',
  templateUrl: './unit-create.component.html',
  styleUrls: ['./unit-create.component.scss'],
})
export class UnitCreateComponent implements OnInit {

  data = {
    name: '',
    description: '',
    leader: '',
    credit: '',
    major: ''
  }
  message: string;
  editData: any;

  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService, private storageService: StorageService) { }

  faculties: any;
  majors: any;
  ngOnInit() {
    this.httpService.get('/public/faculty/').subscribe((result: any)=>{
      this.faculties = result.data;
      this.httpService.get('/public/major').subscribe((res: any)=>{
        this.majors = res.data;
        this.storageService.get('editUnit').then(res=>{
          this.editData=res;
          this.data.credit=this.editData.credit;
          this.data.name=this.editData.name;
          this.data.description=this.editData.description;
          this.data.major=this.editData.major.id;
          this.data.leader=this.editData.leader.id;
        });
      });
    });
  }

  onCreate(){
    this.httpService.postWithToken('/admin/unit-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.message = "name: " + result.name + "<br>" + "description: " + result.description + "<br>leader: " + result.leader + "<br>major: " + result.major + "<br>credit: " + result.credit;
        this.alertService.presentAlert("Data inserted Successfully", "Unit created",this.message);
        this.toastService.presentToast("Successfully created Unit <br>" + this.message)
        this.clear;
      }
    }, error => {
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

  clear(){
    this.data.name = ''; 
    this.data.credit = '';
    this.data.description = '';
    this.data.major='';
    this.data.leader='';
  }

  ngOnDestroy(){
    this.storageService.removeItem('editUnit').then(res=>console.log('removed'));
    window.location.reload();
  }
  
  onEdit(){
    this.httpService.postWithToken(`/admin/unit-edit/${this.editData.id}`, this.data).subscribe((result:any)=>{
      this.alertService.presentAlert("Data inserted Successfully", "Unit edited", "SUCCESS");
      this.toastService.presentToast("Successfully edited Unit");
      this.clear();
    },
    error=>{
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

}
