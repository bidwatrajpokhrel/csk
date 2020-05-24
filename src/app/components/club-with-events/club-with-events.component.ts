import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { PublicClubService } from 'src/app/services/public/public-club.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-club-with-events',
  templateUrl: './club-with-events.component.html',
  styleUrls: ['./club-with-events.component.scss'],
})
export class ClubWithEventsComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private publiclubService: PublicClubService,
    private router: Router,
    private authService: LoginService
  ) { }

  
  clubId: any;
  clubDetail: any = null;

  ngOnInit() {
    this.storageService.get("clubId").then(club_id =>{
      this.clubId = club_id;
      this.fetchClub(club_id);          
    });
  }

  fetchClub(clubId: string){
    this.publiclubService.getAClubWithEvents(clubId).subscribe(data => {
      this.clubDetail = data.data[0];
      console.log(this.clubDetail);
    });  
  }

  ngOnDestroy(){
    this.storageService.removeItem("clubId");
  }

}
