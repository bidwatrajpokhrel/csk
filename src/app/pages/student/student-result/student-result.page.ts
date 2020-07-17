import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.page.html',
  styleUrls: ['./student-result.page.scss'],
})
export class StudentResultPage implements OnInit {

  constructor(
    private storageService: StorageService,
    private httpService: HttpService
  ) { }

  results: any;
  ngOnInit() {
    this.storageService.get('userData').then(res=>{
      this.httpService.getWithToken(`/student/result_id/${res.id}`).subscribe((result:any)=>{
        this.results = result.data
      });
    })
  }

}
