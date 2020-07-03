import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {UnitCreateComponent} from 'src/app/admin-component/unit-create/unit-create.component';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.page.html',
  styleUrls: ['./unit.page.scss'],
})
export class UnitPage implements OnInit {

  displayedColumns: string[] = ['unitId', 'unitName', 'unitDescription', 'unitLeader', 'unitCredit', 'unitMajor', 'unitImage', 'editImage', 'actions'];

  onCreate(){
    this.dialog.open(UnitCreateComponent);
  }

  constructor(private dialog: MatDialog, private httpService: HttpService) { }

  listData: any;
  ngOnInit() {
    this.httpService.get('/public/unit').subscribe((result: any)=>{
      this.listData = result.data;
    })
  }

  selectedFile = null;
  onFileSelected(event, id){
    this.selectedFile = event.target.files[0];
    this.onUpload(id);
  }
  onUpload(id){
    this.httpService.post(`/image/units/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }

}
