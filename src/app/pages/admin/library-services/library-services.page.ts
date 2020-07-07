import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {LibraryServicesCreateComponent} from 'src/app/admin-component/library-services-create/library-services-create.component';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-library-services',
  templateUrl: './library-services.page.html',
  styleUrls: ['./library-services.page.scss'],
})
export class LibraryServicesPage implements OnInit {
  onCreate(){
    this.dialog.open(LibraryServicesCreateComponent);
  }

  displayedColumns: string[] = ['serviceId', 'serviceName', 'serviceAbout', 'Image', 'editImage', 'actions'];

  constructor(private dialog: MatDialog, private httpService: HttpService, private storageService: StorageService, private toastService:ToastService) { }

  selectedFile = null;
  onFileSelected(event, id){
    this.selectedFile = event.target.files[0];
    this.onUpload(id);
  }
  onUpload(id){
    this.httpService.post(`/image/library-services/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }

  listData: any;
  ngOnInit() {
    this.httpService.getWithToken('/public/library-services/').subscribe((result: any)=>{
      this.listData = result.data;
      console.log(result)
    })
  }

  onEdit(editData){
    this.storageService.store('editLibraryService', editData).then(res=>this.dialog.open(LibraryServicesCreateComponent));
  }

  onDelete(id){
    this.httpService.postWithTokenEmpty(`/admin/library-services-delete/${id.id}`).subscribe(res=>{
      this.toastService.presentToast('Content Deleted');
      window.location.reload();
    },error=>{
      this.toastService.presentToast('Something went wrong. Check that field has no dependencies')
    });
  }

}
