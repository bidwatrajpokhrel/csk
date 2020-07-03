import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-admission-info-create',
  templateUrl: './admission-info-create.component.html',
  styleUrls: ['./admission-info-create.component.scss'],
})
export class AdmissionInfoCreateComponent implements OnInit {

  data = {
    name: '',
    description: ''
  }
  message: string;

  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService) { }

  ngOnInit() {}

  onCreate(){
    this.httpService.postWithToken('/admin/admission-info-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.message = "name: " + result.name + "<br>" + "description: " + result.description;
        this.alertService.presentAlert("Data inserted Successfully", "Admission Info added",this.message);
        this.toastService.presentToast("Successfully created Admission Information <br>" + this.message)
        this.data.name = ''; 
        this.data.description = '';
      }
    }, error => {
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

  ngOnDestroy(){
    window.location.reload()
  }

}
