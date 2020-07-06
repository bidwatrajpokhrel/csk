import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../../components/components.module'

import { EventsGalleryPageRoutingModule } from './events-gallery-routing.module';
import {ImageGalleryComponent} from 'src/app/components/image-gallery/image-gallery.component';
import { EventsGalleryPage } from './events-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsGalleryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EventsGalleryPage]
})
export class EventsGalleryPageModule {}
