import { Component, OnInit } from '@angular/core';
import { HeadCreateComponent } from 'src/app/admin-component/head-create/head-create.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-talking-heads',
  templateUrl: './talking-heads.page.html',
  styleUrls: ['./talking-heads.page.scss'],
})
export class TalkingHeadsPage implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'type', 'titles','talks','image', 'editImage', 'actions'];

  onCreate(){
    this.dialog.open(HeadCreateComponent);
  }

  constructor(private dialog: MatDialog, private httpService:HttpService, private storageService: StorageService, private toastService: ToastService) { }

  listData:any;
  ngOnInit() {
    this.httpService.get('/public/talking/').subscribe((result:any)=>{
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
    this.httpService.post(`/image/head/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }

  onEdit(data){
    this.storageService.store('editHead', data).then(res=>this.dialog.open(HeadCreateComponent));
  }

  onDelete(id){
    this.httpService.postWithTokenEmpty(`/admin/talking-delete/${id.id}`).subscribe(res=>{
      this.toastService.presentToast('Content Deleted');
      window.location.reload();
    },error=>{
      this.toastService.presentToast('Something went wrong. Check that field has no dependencies')
    });
  }

}
