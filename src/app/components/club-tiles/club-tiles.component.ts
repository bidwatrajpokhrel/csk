import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { PublicClubService } from 'src/app/services/public/public-club.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

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
    private authService: LoginService
  ) {
    
  }

  clubs: any;

  ngOnInit() {
    this.publiclubService.getClubs().subscribe( result => {
      this.clubs = result.data;
      console.log( this.clubs);
    } );
  }


}
