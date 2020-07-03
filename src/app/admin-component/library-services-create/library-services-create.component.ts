import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-library-services-create',
  templateUrl: './library-services-create.component.html',
  styleUrls: ['./library-services-create.component.scss'],
})
export class LibraryServicesCreateComponent implements OnInit {

  data = {
    name: '',
    description: ''

  }

  message: string;

  constructor(private httpService:HttpService,
    private alertService: AlertService,
    private toastService: ToastService) { }


  ngOnInit() {  }


  onCreate(){
    console.log(this.data);
    this.httpService.postWithToken('/admin/library-services-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.message = "Name: " + result.name + "<br> Description: " + result.description; 
        this.alertService.presentAlert("Data inserted Successfully", "Library Service added", this.message);
        this.toastService.presentToast(" Library Service Added <br>" + this.message)
        this.clear();
      }
    }, error => {
      console.log(error);
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

  clear(){
    this.data.description='';
    this.data.name=''
  }

  ngOnDestroy(){
    window.location.reload()
  }


}
