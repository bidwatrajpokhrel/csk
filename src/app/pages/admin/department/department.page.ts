import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {DepartmentCreateComponent} from 'src/app/admin-component/department-create/department-create.component';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.page.html',
  styleUrls: ['./department.page.scss'],
})
export class DepartmentPage implements OnInit {

  displayedColumns: string[] = ['departmentId', 'departmentName', 'departmentAbout', 'departmentImage', 'editImage','departmentFaculty','actions'];

  onCreate(){
    this.dialog.open(DepartmentCreateComponent);
  }

  selectedFile = null;
  onFileSelected(event, id){
    this.selectedFile = event.target.files[0];
    this.onUpload(id);
  }
  onUpload(id){
    this.httpService.post(`/image/department/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }


  constructor(private dialog: MatDialog, private httpService: HttpService, private storageService: StorageService, private toastService: ToastService) { }

  listData: any;
  ngOnInit() {
    this.httpService.get('/public/department-with-faculty').subscribe((result: any)=>{
      this.listData = result.data;
      console.log(result)
    });
  }
   
  onEdit(editData){
    this.storageService.store('editDepartment', editData).then(res=>{
      this.dialog.open(DepartmentCreateComponent);
    })
  }


  onDelete(id){
    this.httpService.postWithTokenEmpty(`/admin/department-delete/${id.id}`).subscribe(res=>{
      this.toastService.presentToast('Content Deleted');
      window.location.reload();
    },error=>{
      this.toastService.presentToast('Something went wrong. Check that field has no dependencies')
    });
  }

}


