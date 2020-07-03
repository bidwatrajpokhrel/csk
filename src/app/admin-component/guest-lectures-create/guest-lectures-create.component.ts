import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-guest-lectures-create',
  templateUrl: './guest-lectures-create.component.html',
  styleUrls: ['./guest-lectures-create.component.scss'],
})
export class GuestLecturesCreateComponent implements OnInit {

  data = {
    name: '',
    description: '',
    club: '',
    date_time_:'',
    subject: '',
    title: ''
  }

  message: string;

  constructor(private httpService:HttpService,
    private alertService: AlertService,
    private toastService: ToastService,
    private datePipe: DatePipe) { }

  clubs: any;
  ngOnInit() {
    this.httpService.get('/public/clubs/').subscribe((result: any)=>{
      this.clubs = result.data;
    });
  }


  onCreate(){
    this.data.date_time_=this.datePipe.transform(this.data.date_time_, "dd-MMM-yy");
    this.httpService.postWithToken('/admin/guest-lecture-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.alertService.presentAlert("Data inserted Successfully", "Guest Lecture added", "Success");
        this.toastService.presentToast("Guest Lecture Added")
        this.clear();
      }
    }, error => {
      console.log(error);
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

  clear(){
    this.data.description='';
    this.data.name='';
    this.data.title='';
    this.data.date_time_='';
    this.data.club='';
    this.data.subject='';

  }

  ngOnDestroy(){
    window.location.reload()
  }
}
