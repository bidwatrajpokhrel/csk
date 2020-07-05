import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {FacultyCreateComponent} from 'src/app/admin-component/faculty-create/faculty-create.component';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.page.html',
  styleUrls: ['./faculty.page.scss'],
})
export class FacultyPage implements OnInit {

  displayedColumns: string[] = ['facultyId', 'facultyTitle', 'facultyName', 'facultyQualification', 'facultyType', 'facultyDepartment', 'facultyImage', 'actions', 'editImage'];

  selectedFile = null;

  onCreate(){
    this.dialog.open(FacultyCreateComponent);
  }

  
  onFileSelected(event, id){
    this.selectedFile = event.target.files[0];
    this.onUpload(id);
  }

  onUpload(id){
    this.httpService.post(`/image/faculty/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }

  constructor(private dialog: MatDialog, private httpService: HttpService, private storageService:StorageService, private toastService: ToastService) { }

  listData: any;
  ngOnInit() {
    this.httpService.get('/public/faculty/').subscribe((result: any)=>{
      this.listData = result.data;
      console.log(result)
    });
  }

  onEdit(editData){
    this.storageService.store('editFaculty', editData).then(res=>{
      this.dialog.open(FacultyCreateComponent);
    });
  }

  onDelete(id){
    this.httpService.postWithTokenEmpty(`/admin/faculty-delete/${id.id}`).subscribe(res=>{
      this.toastService.presentToast('Content Deleted');
      window.location.reload();
    },error=>{
      this.toastService.presentToast('Something went wrong. Check that field has no dependencies')
    });
  }


}
