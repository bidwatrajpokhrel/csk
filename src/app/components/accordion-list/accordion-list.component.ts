import { Component, OnInit, Input } from '@angular/core';
import { ToastController} from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { PublicEventService } from 'src/app/services/public/public-event.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  // styleUrls: ['./accordion-list.component.scss'],
})
export class AccordionListComponent implements OnInit {
  
  @Input ('events') events: any;
 
  constructor(private storageService: StorageService,
    private publicEventService: PublicEventService,
    private router: Router,
    private authService: LoginService,
    private toastService: ToastService) { }

  ngOnInit() {}

  clickInterested(){
    this.toastService.presentToast('Thank You for shwowing your interest. Hope to meet you at the event');
  }

  viewClub(club){
    this.storageService.get("userData").then(res => {      
      console.log(club.id) //TODO DELETE THIS LINE
      this.storageService.store( "clubId", club.id);
      if (res.type == 'admin'){}
      else if (res.type == 'student'){
        this.router.navigate( ['/student-menu/clubs/detail'] )
      }
      else{}
    })
  }

}
