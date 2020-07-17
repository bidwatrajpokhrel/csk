import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {UnitDetailsInfoComponent} from '../../components/unit-details-info/unit-details-info.component';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.scss'],
})
export class UnitDetailsComponent implements OnInit {

  clickUnitDetails(any){
    this.storageService.store('view-unit', any.id).then(res=>this.dialog.open(UnitDetailsInfoComponent));
  }

  clickOurTeam(){
    this.route.navigate(['/student-menu/faculty']);
  }

  constructor(
    private dialog: MatDialog,
    private route: Router,
    private httpService: HttpService,
    private storageService: StorageService) { }


  units:any;
  myunits: any;
  ngOnInit() {
    this.storageService.get('userData').then(res=>{
      this.httpService.getWithToken(`/student/view-profile/${res.id}`).subscribe((r:any)=>{
        this.httpService.get(`/public/major/${r.data[0].major.info.id}`).subscribe((m:any)=>{
          this.myunits = m.data[0].units;
          this.httpService.get('/public/unit').subscribe((result:any)=>{
            this.units=result.data;
          })
        });
      });
    });
  }

}
