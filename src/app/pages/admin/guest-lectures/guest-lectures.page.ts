import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {GuestLecturesCreateComponent} from 'src/app/admin-component/guest-lectures-create/guest-lectures-create.component';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-guest-lectures',
  templateUrl: './guest-lectures.page.html',
  styleUrls: ['./guest-lectures.page.scss'],
})
export class GuestLecturesPage implements OnInit {
  displayedColumns: string[] = ['guestLectureId', 'guestLectureTitle', 'guestLectureName', 'guestLectureAbout', 'guestLectureSubject', 'guestLectureDateTime','clubAssociated', 'image', 'editImage', 'actions'];

  selectedFile = null;

  onCreate(){
    this.dialog.open(GuestLecturesCreateComponent);
  }  
  onFileSelected(event, id){
    this.selectedFile = event.target.files[0];
    this.onUpload(id);
  }
  onUpload(id){
    this.httpService.post(`/image/guest-lectures/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }

  constructor(private dialog: MatDialog, private httpService: HttpService, private storageService:StorageService, private toastService: ToastService) { }

  listData: any;
  ngOnInit() {
    this.httpService.get('/public/guest_lecture/').subscribe((result: any)=>{
      this.listData = result.data;
      console.log(result)
    })
  }

  onEdit(editData){
    this.storageService.store('editGuestLecture', editData).then(res=>{
      this.dialog.open(GuestLecturesCreateComponent);
    });
  }

  onDelete(id){
    this.httpService.postWithTokenEmpty(`/admin/guest-lecture-delete/${id.id}`).subscribe(res=>{
      this.toastService.presentToast('Content Deleted');
      window.location.reload();
    },error=>{
      this.toastService.presentToast('Something went wrong. Check that field has no dependencies')
    });
  }
}
