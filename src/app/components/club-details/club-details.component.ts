import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { HttpService } from 'src/app/services/http.service';
import { ToastService } from 'src/app/services/toast.service';
import { ClubMembershipCreateComponent } from 'src/app/admin-component/club-membership-create/club-membership-create.component';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.scss'],
})
export class ClubDetailsComponent implements OnInit {

  constructor(private storageService: StorageService, private httpService: HttpService, private toastService: ToastService) { }

  data={
    club_id: '',
    student_id: ''
  }

  club: any;
  ngOnInit() {
    this.storageService.get('view-club').then(res=>{
      this.club = res;
    })
  }

  ngOnDestroy(){
    this.storageService.removeItem('view-club').then(res=>console.log('removed'))
  }

  member(){
    this.data.club_id=this.club.id;
    this.storageService.get('userData').then(res=>{
      this.data.student_id = res.id;
      this.httpService.postWithToken('/student/club-membership', this.data).subscribe((result: any)=>{
        if (result.message=="success") {
          this.toastService.presentToast('Successfully joined club. Cancel Membership from dashboard.')
        }
      }, error=>{
        this.toastService.presentToast('Membership Unsuccessful. Check to see if you are not already a member from dashboard.')
      })
    })
    
  }

}
