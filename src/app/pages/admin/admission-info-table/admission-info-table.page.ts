import { Component, OnInit } from '@angular/core';
import { AdmissionInfoCreateComponent } from 'src/app/admin-component/admission-info-create/admission-info-create.component';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';


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
    private storageService: StorageService,
    private toastService: ToastService
    ) { }

  ngOnInit() {
    this.httpService.get('/public/admission-info').subscribe((result: any) => {
      this.listData = result.data;
      console.log(this.listData);
      
    })
  }

  onEdit(editData){
    this.storageService.store('editAdmissionInfo', editData).then(res=>{
      this.dialog.open(AdmissionInfoCreateComponent);
    })
  }

  onDelete(id){
    this.httpService.postWithTokenEmpty(`/admin/admission-info-delete/${id.id}`).subscribe(res=>{
      this.toastService.presentToast('Content Deleted');
      window.location.reload();
    },error=>{
      this.toastService.presentToast('Something went wrong. Check that field has no dependencies')
    });
    }
}
