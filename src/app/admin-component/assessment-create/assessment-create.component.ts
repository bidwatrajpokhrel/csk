import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-assessment-create',
  templateUrl: './assessment-create.component.html',
  styleUrls: ['./assessment-create.component.scss'],
})
export class AssessmentCreateComponent implements OnInit {

  numericOnly(event): boolean { // restrict e,+,-,E characters in  input type number
    debugger
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 101 || charCode == 69 || charCode == 45 || charCode == 43) {
      return false;
    }
    return true;

  }

  data = {
    title: '',
    unit:'',
    marks: '',
    description: ''

  }

  message: string;

  constructor(private httpService:HttpService,
    private alertService: AlertService,
    private toastService: ToastService) { }

  units: any;
  ngOnInit() {
    this.httpService.get('/public/unit/').subscribe((result: any)=>{
      this.units = result.data;
    });
  }


  onCreate(){
    console.log(this.data);
    this.httpService.postWithToken('/admin/assessment-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.message = "Unit: " + result.unit + "<br> Title: " + result.title + "<br> Marks: " + result.marks + "<br> Description: " + result.description; 
        this.alertService.presentAlert("Data inserted Successfully", "Guest Lecture added", +this.message);
        this.toastService.presentToast("Guest Lecture Added <br>" + this.message)
        this.clear();
      }
    }, error => {
      console.log(error);
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

  clear(){
    this.data.description='';
    this.data.title='';
    this.data.marks='';
    this.data.unit='';

  }

  ngOnDestroy(){
    window.location.reload()
  }

}
