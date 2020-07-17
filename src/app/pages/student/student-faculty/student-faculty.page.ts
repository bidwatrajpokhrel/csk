import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { MatDialog } from '@angular/material/dialog';
import { FacultyDetailsComponent } from 'src/app/components/faculty-details/faculty-details.component';

@Component({
  selector: 'app-student-faculty',
  templateUrl: './student-faculty.page.html',
  styleUrls: ['./student-faculty.page.scss'],
})
export class StudentFacultyPage implements OnInit {

  constructor(private httpService: HttpService,
    private storageService: StorageService,
    private dialog: MatDialog) { }

  faculties: any;
  ngOnInit() {
    this.httpService.get('/public/faculty/').subscribe((result:any)=>{
      this.faculties = result.data;
    });
  }

  onClick(res){
    this.storageService.store('view-faculty', res).then(res=>this.dialog.open(FacultyDetailsComponent));
  }

}
