import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {ECACreateComponent} from 'src/app/admin-component/ecacreate/ecacreate.component';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-eca',
  templateUrl: './eca.page.html',
  styleUrls: ['./eca.page.scss'],
})
export class ECAPage implements OnInit {

  displayedColumns: string[] = ['ecaId', 'ecaName', 'ecaAbout', 'ecaIncharge', 'image', 'editImage', 'actions'];

  onCreate(){
    this.dialog.open(ECACreateComponent);
  }
  constructor(private dialog: MatDialog, private httpService: HttpService, private storageService: StorageService, private toastService: ToastService) { }

  listData: any;
  ngOnInit() {
    this.httpService.get('/public/eca').subscribe((result: any)=>{
      this.listData = result.data;
      console.log(result)
    })
  }

  selectedFile = null;
  onFileSelected(event, id){
    this.selectedFile = event.target.files[0];
    this.onUpload(id);
  }
  onUpload(id){
    this.httpService.post(`/image/eca/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }

  onEdit(editData){
    this.storageService.store('editECA', editData).then(res=>{
      this.dialog.open(ECACreateComponent);
    });
  }

  onDelete(id){
    this.httpService.postWithTokenEmpty(`/admin/eca-delete/${id.id}`).subscribe(res=>{
      this.toastService.presentToast('Content Deleted');
      window.location.reload();
    },error=>{
      this.toastService.presentToast('Something went wrong. Check that field has no dependencies')
    });
  }

}
