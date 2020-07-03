import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {ECACreateComponent} from 'src/app/admin-component/ecacreate/ecacreate.component';
import { HttpService } from 'src/app/services/http.service';

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
  constructor(private dialog: MatDialog, private httpService: HttpService) { }

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


}
