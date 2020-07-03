import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';

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

  message: string;

  constructor(private httpService:HttpService,
    private alertService: AlertService,
    private toastService: ToastService) { }

  faculties: any;
  ngOnInit() {
    this.httpService.get('/public/faculty/').subscribe((result: any)=>{
      this.faculties = result.data;
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
    window.location.reload()
  }


}
