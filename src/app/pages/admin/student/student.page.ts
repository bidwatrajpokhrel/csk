import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {StudentCreateComponent} from 'src/app/admin-component/student-create/student-create.component';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'level', 'email','about','major', 'clubs', 'events', 'image', 'editImage', 'actions'];

  onCreate(){
    this.dialog.open(StudentCreateComponent);
  }

  constructor(private dialog: MatDialog, private httpService:HttpService, private storageService: StorageService, private toastService: ToastService) { }

  listData:any;
  ngOnInit() {
    this.httpService.getWithToken('/admin/student-profile-get/').subscribe((result:any)=>{
      this.listData=result.data;
      console.log(this.listData)
    });
  }

  selectedFile = null;
  onFileSelected(event, id){
    this.selectedFile = event.target.files[0];
    this.onUpload(id);
  }
  onUpload(id){
    this.httpService.post(`/image/student/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }

  onEdit(data){
    this.storageService.store('editStudent', data).then(res=>this.dialog.open(StudentCreateComponent));
  }

  
  onDelete(id){
    this.httpService.postWithTokenEmpty(`/admin/student-delete/${id.id}`).subscribe(res=>{
      this.toastService.presentToast('Content Deleted');
      window.location.reload();
    },error=>{
      this.toastService.presentToast('Something went wrong. Check that field has no dependencies')
    });
  }

}
