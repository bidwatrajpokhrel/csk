import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';

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

  message: string;

  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService) { }

  students: any;
  ngOnInit() {
    this.httpService.getWithToken('/admin/student-profile-get/').subscribe((result: any)=>{
      this.students = result.data;
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
    window.location.reload()
  }
}
