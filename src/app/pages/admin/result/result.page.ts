import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {ResultCreateComponent} from 'src/app/admin-component/result-create/result-create.component';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  displayedColumns: string[] = ['id', 'assessment', 'student', 'marks','comments','actions'];

  onCreate(){
    this.dialog.open(ResultCreateComponent);
  }

  constructor(private dialog: MatDialog, private httpService:HttpService, private storageService:StorageService, private toastService: ToastService) { }

  listData:any;
  ngOnInit() {
    this.httpService.getWithToken('/admin/result/').subscribe((result:any)=>{
      this.listData=result.data;
    });
  }

  onEdit(data){
    this.storageService.store('editResult', data).then(res=>this.dialog.open(ResultCreateComponent));
  }

  
  onDelete(id){
    this.httpService.postWithTokenEmpty(`/admin/result-delete/${id.id}`).subscribe(res=>{
      this.toastService.presentToast('Content Deleted');
      window.location.reload();
    },error=>{
      this.toastService.presentToast('Something went wrong. Check that field has no dependencies')
    });
  }

}
