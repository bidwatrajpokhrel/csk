import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { GalleryCreateComponent } from 'src/app/admin-component/gallery-create/gallery-create.component';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {


  displayedColumns: string[] = ['id', 'about', 'image', 'editImage', 'actions'];

  onCreate(){
    this.dialog.open(GalleryCreateComponent);
  }

  selectedFile = null;
  onFileSelected(event, id){
    this.selectedFile = event.target.files[0];
    this.onUpload(id);
  }
  onUpload(id){
    this.httpService.post(`/image/gallery/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }


  constructor(private dialog: MatDialog, private httpService: HttpService, private storageService: StorageService, private toastService: ToastService) { }

  listData: any;
  ngOnInit() {
    this.httpService.get('/public/gallery/').subscribe((result: any)=>{
      this.listData = result.data;
      console.log(result)
    });
  }
   
  onEdit(editData){
    this.storageService.store('editGallery', editData).then(res=>{
      this.dialog.open(GalleryCreateComponent);
    });
  }

  onDelete(id){
    this.httpService.postWithTokenEmpty(`/admin/gallery-delete/${id.id}`).subscribe(res=>{
      this.toastService.presentToast('Content Deleted');
      window.location.reload();
    },error=>{
      this.toastService.presentToast('Something went wrong. Check that field has no dependencies')
    });
  }
}


