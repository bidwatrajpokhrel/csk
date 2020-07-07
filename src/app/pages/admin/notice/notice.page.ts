import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {NoticeCreateComponent} from 'src/app/admin-component/notice-create/notice-create.component';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {

  displayedColumns: string[] = ['noticeId','noticeName','noticeContent', 'noticeAuthor', 'actions'];

  onCreate(){
    this.dialog.open(NoticeCreateComponent);
  }
  constructor(private dialog: MatDialog, private httpService:HttpService, private storageService: StorageService, private toastService: ToastService) { }

  listData: any;
  ngOnInit() {
    this.httpService.getWithToken('/admin/notices/').subscribe((result: any)=>{
      this.listData = result.data;
      console.log(result);
    });
  }

  onEdit(row){
    this.storageService.store('editNotice', row).then(res=>this.dialog.open(NoticeCreateComponent));
  }

  onDelete(id){
    this.httpService.postWithTokenEmpty(`/admin/notice-delete/${id.id}`).subscribe(res=>{
      this.toastService.presentToast('Content Deleted');
      window.location.reload();
    },error=>{
      this.toastService.presentToast('Something went wrong. Check that field has no dependencies')
    });
  }
}
