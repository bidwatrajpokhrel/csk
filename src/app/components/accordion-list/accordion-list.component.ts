import { Component, OnInit, Input } from '@angular/core';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.scss'],
})
export class AccordionListComponent implements OnInit {
  
  @Input ('events') events: any;
 
  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {}

  async clickInterested(events){
    let toast = await this.toastCtrl.create({
      message: 'Thank You fro shwowing your interest. Hope to meet you at the event'
    });
    toast.present();
  }

}
