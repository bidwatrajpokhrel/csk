import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { EcaDetailsComponent } from 'src/app/components/eca-details/eca-details.component';

@Component({
  selector: 'app-student-eca',
  templateUrl: './student-eca.page.html',
  styleUrls: ['./student-eca.page.scss'],
})
export class StudentEcaPage implements OnInit {

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private dialog: MatDialog
  ) { }

  ecas:any;
  ngOnInit() {
    this.httpService.get('/public/eca/').subscribe((result:any)=>{
      this.ecas=result.data;
    });
  }

  onClick(row){
    this.storageService.store('view-eca', row).then(res=>this.dialog.open(EcaDetailsComponent));
  }

}
