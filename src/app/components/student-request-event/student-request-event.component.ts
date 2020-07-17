import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { DatePipe } from '@angular/common';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-student-request-event',
  templateUrl: './student-request-event.component.html',
  styleUrls: ['./student-request-event.component.scss'],
})
export class StudentRequestEventComponent implements OnInit {

  data = {
    name: '',
    description: '',
    club: '',
    event_from:'',
    event_to: '',
    no_of_seats: ''
  }
  editData:any;
  message: string;

  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService, private datePipe: DatePipe, private storageService:StorageService) { }

  clubs: any;
  ngOnInit() {
    this.httpService.get('/public/clubs/').subscribe((result: any)=>{
      this.clubs = result.data;
    });
  }

  onCreate(){
    this.data.event_from=this.datePipe.transform(this.data.event_from, "dd-MMM-yy");
    this.data.event_to=this.datePipe.transform(this.data.event_to, "dd-MMM-yy");
    this.httpService.postWithToken('/student/event-request', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.message = "Name: " + result.name + "<br>Description: " + result.description + "<br>Start Date: " + result.event_from + "<br>End Date: " + result.event_to + "<br>Number of seats: " + result.seats + "<br>Club: " + result.club;
        this.alertService.presentAlert("Data inserted Successfully", "Event Requested",this.message);
        this.toastService.presentToast("Event Requested Successfully <br>" + this.message)
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
    this.data.event_from='';
    this.data.event_to='';
    this.data.club='';
    this.data.no_of_seats='';
  }

  ngOnDestroy(){
  }

}
