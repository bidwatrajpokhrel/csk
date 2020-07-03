import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {EventsCreateComponent} from 'src/app/admin-component/events-create/events-create.component';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  displayedColumns: string[] = ['eventId', 'eventName', 'eventAbout', 'eventFrom', 'eventTo', 'eventNoOfSeats', 'club', 'eventImage', 'editImage','approval', 'actions'];

  onCreate(){
    this.dialog.open(EventsCreateComponent);
  }
  constructor(private dialog: MatDialog, private httpService: HttpService) { }

  selectedFile = null;
  onFileSelected(event, id){
    this.selectedFile = event.target.files[0];
    this.onUpload(id);
  }
  onUpload(id){
    this.httpService.post(`/image/events/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }

  listData: any;
  ngOnInit() {
    this.httpService.getWithToken('/admin/event-all/').subscribe((result: any)=>{
      this.listData = result.data;
      console.log(result)
    })
  }
  
  hide(id){
    this.httpService.postWithTokenEmpty(`/admin/event-cancel/${id}`).subscribe((result:any)=>{
      window.location.reload();
    });
  }

  show(id){
    this.httpService.postWithTokenEmpty(`/admin/event-request/${id}`).subscribe((result:any)=>{
      window.location.reload();
    });
  }

}
