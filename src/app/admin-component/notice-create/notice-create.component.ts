import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-notice-create',
  templateUrl: './notice-create.component.html',
  styleUrls: ['./notice-create.component.scss'],
})
export class NoticeCreateComponent implements OnInit {

  data = {
    name: '',
    content:'',
    author:''
  }
  message: string;
 
  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService) { }


  ngOnInit() { }

  onCreate(){
    this.httpService.postWithToken('/admin/notice-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.message = "Name: " + result.name + "<br>" + "Content: " + result.content + "<br>Author: " + result.author;
        this.alertService.presentAlert("Data inserted Successfully", "Notice created",this.message);
        this.toastService.presentToast("Successfully created Notice <br>" + this.message)
        this.clear;
      }
    }, error => {
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

  clear(){
    this.data.name = '';
    this.data.content='';
    this.data.author='';
  }

  ngOnDestroy(){
    window.location.reload()
  }

}
