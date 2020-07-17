import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
clickUnits(){
  this.route.navigate(['/student-menu/unit-student'])
}
  constructor(private route: Router, private httpService: HttpService, private storageService: StorageService, private toastService: ToastService,
    private dialog: MatDialog) { }

  notices: any;
  student: any;
  units: any;
  ngOnInit() {
    this.httpService.getWithToken('/student/notices/').subscribe((result:any)=>{
      this.notices = result.data;
      this.storageService.get('userData').then(res=>{
        this.httpService.getWithToken(`/student/view-profile/${res.id}`).subscribe((r:any)=>{
          this.student = r.data[0];
          console.log(this.student);
          this.httpService.get(`/public/major/${r.data[0].major.info.id}`).subscribe((m:any)=>{
            this.units = m.data[0].units;
            console.log(this.units);
          });
        });
      });
    });
  }

  unmember(data){
    this.httpService.postWithTokenEmpty(`/student/club-cancel-membership/${data.id}`).subscribe((res:any)=>{
      if (res.message=="success"){
        this.toastService.presentToast('Successfully Cancelled Club Membership');
          this.storageService.get('userData').then(res=>{
            this.httpService.getWithToken(`/student/view-profile/${res.id}`).subscribe((r:any)=>{
              this.student = r.data[0];
            });
          });
      }
    });
  }

  unbook(data){
    this.httpService.postWithTokenEmpty(`/student/event-cancel-booking/${data.id}`).subscribe((res:any)=>{
      if (res.message=="success"){
        this.toastService.presentToast('Successfully Cancelled Event Booking');
          this.storageService.get('userData').then(res=>{
            this.httpService.getWithToken(`/student/view-profile/${res.id}`).subscribe((r:any)=>{
              this.student = r.data[0];
            });
          });
      }
    });
  }

  openFeedback(){
    this.dialog.open(FeedbackComponent);
  }

}
