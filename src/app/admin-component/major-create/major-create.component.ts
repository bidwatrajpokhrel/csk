import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-major-create',
  templateUrl: './major-create.component.html',
  styleUrls: ['./major-create.component.scss'],
})
export class MajorCreateComponent implements OnInit {


  data = {
    name: '',
    qualification: '',
    head: ''
  }
  message: string;
 
  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService) { }

  faculties: any;
  ngOnInit() {
    this.httpService.get('/public/faculty/').subscribe((result: any)=>{
      this.faculties = result.data;
    });
  }

  onCreate(){
    this.httpService.postWithToken('/admin/major-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.message = "name: " + result.name + "<br>" + "qualification: " + result.qualification + "<br>head: " + result.head;
        this.alertService.presentAlert("Data inserted Successfully", "Major created",this.message);
        this.toastService.presentToast("Successfully created Major <br>" + this.message)
        this.clear;
      }
    }, error => {
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

  clear(){
    this.data.name = ''; 
    this.data.head = '';
    this.data.qualification = '';
  }

  ngOnDestroy(){
    window.location.reload()
  }

}
