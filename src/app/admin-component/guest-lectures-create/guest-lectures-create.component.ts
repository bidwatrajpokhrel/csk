import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { DatePipe } from '@angular/common';
import { StorageService } from 'src/app/services/storage.service';

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
  editData: any;
  message: string;

  constructor(private httpService:HttpService,
    private alertService: AlertService,
    private toastService: ToastService,
    private storageService: StorageService,
    private datePipe: DatePipe) { }

  clubs: any;
  ngOnInit() {
    this.httpService.get('/public/clubs/').subscribe((result: any)=>{
      this.clubs = result.data;
      this.storageService.get('editGuestLecture').then(res=>{
        this.editData=res;
        this.data.name=this.editData.guest_name;
        this.data.description=this.editData.description;
        this.data.club=this.editData.club.id;
        this.data.date_time_=this.editData.datetime;
        this.data.subject=this.editData.subject;
        this.data.title=this.editData.title;
      })
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
    this.storageService.removeItem('editGuestLecture').then(res=>console.log('removed'));
    window.location.reload();

  }

  onEdit(){
    this.data.date_time_=this.datePipe.transform(this.data.date_time_, "dd-MMM-yy");
    this.httpService.postWithToken(`/admin/guest-lectures-edit/${this.editData.id}`, this.data).subscribe((result:any)=>{
      this.alertService.presentAlert("Data inserted Successfully", "Guest Lecture edited", "Success");
      this.toastService.presentToast("Guest Lecture Edited");
      this.clear();
    },
    error=>{
      this.toastService.presentToast("An error occured. Please try again");
    });
  }
}
