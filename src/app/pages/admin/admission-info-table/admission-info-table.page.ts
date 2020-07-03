import { Component, OnInit } from '@angular/core';
import { AdmissionInfoCreateComponent } from 'src/app/admin-component/admission-info-create/admission-info-create.component';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-admission-info-table',
  templateUrl: './admission-info-table.page.html',
  styleUrls: ['./admission-info-table.page.scss'],
})
export class AdmissionInfoTablePage implements OnInit {

  listData: any;

  displayedColumns: string[] = ['infoId', 'infoName', 'information', 'actions'];
  
  onCreate(){
    this.dialog.open(AdmissionInfoCreateComponent);
  }

  constructor(
    private dialog: MatDialog,
    private httpService: HttpService,
    private StorageService: StorageService
    ) { }

  ngOnInit() {
    this.httpService.get('/public/admission-info').subscribe((result: any) => {
      this.listData = result.data;
      console.log(this.listData);
      
    })
  }

}
