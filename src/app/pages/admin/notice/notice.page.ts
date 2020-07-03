import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {NoticeCreateComponent} from 'src/app/admin-component/notice-create/notice-create.component';
import { HttpService } from 'src/app/services/http.service';

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
  constructor(private dialog: MatDialog, private httpService:HttpService) { }

  listData: any;
  ngOnInit() {
    this.httpService.getWithToken('/admin/notices/').subscribe((result: any)=>{
      this.listData = result.data;
      console.log(result)
    })
  }

}
