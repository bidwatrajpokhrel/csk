import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {MajorCreateComponent} from 'src/app/admin-component/major-create/major-create.component';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-major',
  templateUrl: './major.page.html',
  styleUrls: ['./major.page.scss'],
})
export class MajorPage implements OnInit {

  displayedColumns: string[] = ['majorId', 'majorName', 'majorQualification', 'majorHead', 'majorImage', 'editImage', 'majorUnits', 'actions'];

  onCreate(){
    this.dialog.open(MajorCreateComponent);
  }
  constructor(private dialog: MatDialog, private httpService:HttpService) { }

  listData: any;
  ngOnInit() {
    this.httpService.get('/public/major').subscribe((result: any)=>{
      this.listData = result.data;
    })
  }

  selectedFile = null;
  onFileSelected(event, id){
    this.selectedFile = event.target.files[0];
    this.onUpload(id);
  }
  onUpload(id){
    this.httpService.post(`/image/major/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }

}
