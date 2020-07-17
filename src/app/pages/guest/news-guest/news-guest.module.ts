import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsGuestPageRoutingModule } from './news-guest-routing.module';
import {MaterialModule} from 'src/app/material.module';
import { NewsGuestPage } from './news-guest.page';
import {ComponentsGuestModule} from 'src/app/pages/guest/components-guest/components-guest.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsGuestPageRoutingModule,
    MaterialModule,
    ComponentsGuestModule,
    ComponentsModule
  ],
  declarations: [NewsGuestPage]
})
export class NewsGuestPageModule {}
