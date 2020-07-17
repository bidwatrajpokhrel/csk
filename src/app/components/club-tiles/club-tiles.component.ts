import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { PublicClubService } from 'src/app/services/public/public-club.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import {MatDialog} from "@angular/material/dialog";
import {ClubDetailsComponent} from 'src/app/components/club-details/club-details.component';
@Component({
  selector: 'app-club-tiles',
  templateUrl: './club-tiles.component.html',
  styleUrls: ['./club-tiles.component.scss'],
})
export class ClubTilesComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private publiclubService: PublicClubService,
    private router: Router,
    private authService: LoginService,
    private dialog: MatDialog
  ) {
    
  }
  onClick(club){
    this.storageService.store('view-club', club).then(res=>this.dialog.open(ClubDetailsComponent));
  }
  clickSeeAllEvents(){
    this.router.navigate(['/student-menu/event-student'])
  }

  clubs: any;

  ngOnInit() {
    this.publiclubService.getAllClubsWithEvents().subscribe( result => {
      this.clubs = result.data;
      console.log( this.clubs);
    } );
  }

  
  
  // viewClub(club){
  //   this.storageService.get("userData").then(res => {      
  //     console.log(club.id) //TODO DELETE THIS LINE
  //     this.storageService.store( "clubId", club.id);
  //     if (res.type == 'admin'){}
  //     else if (res.type == 'student'){
  //       this.router.navigate( ['/student-menu/clubs/detail'] )
  //     }
  //     else{}
  //   })
    
  // }

}
