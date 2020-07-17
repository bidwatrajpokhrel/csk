import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {

  constructor(private httpService: HttpService, private toastService: ToastService) { }

  data = {
    description: ''
  }
  ngOnInit() {
  }

  post(){
    this.httpService.postWithToken('/student/studentfeedback-add', this.data).subscribe((res:any)=>{
      if(res.message=="success"){
        this.toastService.presentToast("Successfully Presented Toast");
        this.data.description="";
      }
    }, error=>{
      this.toastService.presentToast("Something went wrong. Please Try Again");
    });
  }
}