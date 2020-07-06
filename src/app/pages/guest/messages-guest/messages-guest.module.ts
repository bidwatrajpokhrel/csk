import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagesGuestPageRoutingModule } from './messages-guest-routing.module';
import {MaterialModule} from 'src/app/material.module';
import { MessagesGuestPage } from './messages-guest.page';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesGuestPageRoutingModule,
    MaterialModule,
    ComponentsGuestModule
  ],
  declarations: [MessagesGuestPage]
})
export class MessagesGuestPageModule {}
