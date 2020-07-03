import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {LibraryServicesCreateComponent} from 'src/app/admin-component/library-services-create/library-services-create.component';
import { HttpService } from 'src/app/services/http.service';

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

  constructor(private dialog: MatDialog, private httpService: HttpService) { }

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

}
