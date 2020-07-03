import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {ClubsCreateComponent} from 'src/app/admin-component/clubs-create/clubs-create.component';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.page.html',
  styleUrls: ['./clubs.page.scss'],
})
export class ClubsPage implements OnInit {

  displayedColumns: string[] = ['clubId', 'clubName', 'clubDescription', 'clubPresident', 'clubVicePresident', 'clubEvents', 'clubImage', 'editImage', 'actions'];

  onCreate(){
    this.dialog.open(ClubsCreateComponent);
  }

  selectedFile = null;
  onFileSelected(event, id){
    this.selectedFile = event.target.files[0];
    this.onUpload(id);
  }
  onUpload(id){
    this.httpService.post(`/image/clubs/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }

  constructor(private dialog: MatDialog, private httpService: HttpService) { }

  listData: any;
  ngOnInit() {
    this.httpService.get('/public/club-with-events').subscribe((result: any)=>{
      this.listData = result.data;
      console.log(result)
    })
  }

}
