import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-clubs-create',
  templateUrl: './clubs-create.component.html',
  styleUrls: ['./clubs-create.component.scss'],
})
export class ClubsCreateComponent implements OnInit {

  data = {
    name: '',
    description: '',
    president: '',
    vice_president:''
  }

  editData:any;

  message: string;
  

  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService, private storageService: StorageService) { }

  students: any;
  ngOnInit() {
    this.httpService.getWithToken('/admin/student-profile-get/').subscribe((result: any)=>{
      this.students = result.data;
      this.storageService.get('editClubs').then(res=>{
        this.editData=res;
        this.data.name=this.editData.name;
        this.data.description=this.editData.description;
        this.data.president=this.editData.president.id;
        this.data.vice_president=this.editData.vice_president.id;
      });
    });
  }

  onCreate(){
    this.httpService.postWithToken('/admin/club-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.message = "Name: " + result.club_name + "<br>Description: " + result.description + "<br>President: " + result.club_president + "<br>Vice President: " + result.club_vice_president;
        this.alertService.presentAlert("Data inserted Successfully", "Club added",this.message);
        this.toastService.presentToast("Club created Successfully <br>" + this.message)
        this.clear();
      }
    }, error => {
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

  clear(){
    this.data.description='';
    this.data.name='';
    this.data.president='';
    this.data.vice_president='';

  }

  ngOnDestroy(){
    this.storageService.removeItem('editClubs').then(res=>console.log('removed'));
    window.location.reload();
  }

  onEdit(){
    this.httpService.postWithToken(`/admin/club-edit/${this.editData.id}`, this.data).subscribe((result:any)=>{
      this.message = "Name: " + result.name + "<br>Description: " + result.description + "<br>President: " + result.president + "<br>Vice President: " + result.vice_president;
      this.alertService.presentAlert("Data inserted Successfully", "Club edited", this.message);
      this.toastService.presentToast("Club edited Successfully <br>" + this.message)
      this.clear();
    },
    error=>{
      this.toastService.presentToast("An error occured. Please try again")
    });
  }
}
