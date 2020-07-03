import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {FacultyCreateComponent} from 'src/app/admin-component/faculty-create/faculty-create.component';
import { HttpService } from 'src/app/services/http.service';

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

  constructor(private dialog: MatDialog, private httpService: HttpService) { }

  listData: any;
  ngOnInit() {
    this.httpService.get('/public/faculty/').subscribe((result: any)=>{
      this.listData = result.data;
      console.log(result)
    })
  }

}
