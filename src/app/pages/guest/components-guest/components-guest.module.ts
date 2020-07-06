import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessagesDetailsComponent} from './messages-details/messages-details.component';
import { NewsDetailsGuestComponent} from './news-details-guest/news-details-guest.component';
import {GuestMenuDetailsComponent} from './guest-menu-details/guest-menu-details.component';
@NgModule({
  declarations: [GuestMenuDetailsComponent,
    MessagesDetailsComponent,
    NewsDetailsGuestComponent],
  imports: [
    CommonModule
  ],
  exports : [
    MessagesDetailsComponent,
    NewsDetailsGuestComponent,
    GuestMenuDetailsComponent
  ]
  
})
export class ComponentsGuestModule { }
