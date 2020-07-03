import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';

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

  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService) { }

  faculties: any;
  majors: any;
  ngOnInit() {
    this.httpService.get('/public/faculty/').subscribe((result: any)=>{
      this.faculties = result.data;
      this.httpService.get('/public/major').subscribe((res: any)=>{
        this.majors = res.data;
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
    window.location.reload()
  }

}
