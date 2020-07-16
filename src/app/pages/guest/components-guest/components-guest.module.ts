import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessagesDetailsComponent} from './messages-details/messages-details.component';
import { NewsDetailsGuestComponent} from './news-details-guest/news-details-guest.component';
import {GuestMenuDetailsComponent} from './guest-menu-details/guest-menu-details.component';
import {HeaderGuestComponent} from './header-guest/header-guest.component';
import {FooterGuestComponent} from './footer-guest/footer-guest.component';
@NgModule({
  declarations: [GuestMenuDetailsComponent,
    MessagesDetailsComponent,
    NewsDetailsGuestComponent,
    HeaderGuestComponent,
    FooterGuestComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    MessagesDetailsComponent,
    NewsDetailsGuestComponent,
    GuestMenuDetailsComponent,
    HeaderGuestComponent,
    FooterGuestComponent
  ]
  
})
export class ComponentsGuestModule { }
