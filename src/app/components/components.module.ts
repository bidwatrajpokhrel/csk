import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MaterialModule} from 'src/app/material.module';
import { ClubTilesComponent } from './club-tiles/club-tiles.component';
import { ClubWithEventsComponent } from './club-with-events/club-with-events.component';
import { AccordionListComponent } from './accordion-list/accordion-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ImageGalleryComponent} from './image-gallery/image-gallery.component';
import { HttpClientModule } from '@angular/common/http';
import {ClubDetailsComponent} from './club-details/club-details.component';
import {GuestLecturesDetailsComponent} from './guest-lectures-details/guest-lectures-details.component';
import {CanteenMenuDetailsComponent} from './canteen-menu-details/canteen-menu-details.component';
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        MaterialModule
    ],
    declarations: [
        ClubTilesComponent,
        ClubWithEventsComponent,
        AccordionListComponent,
        DashboardComponent,
        ImageGalleryComponent,
        ClubDetailsComponent,
        GuestLecturesDetailsComponent,
        CanteenMenuDetailsComponent
    ],
    exports: [
        ClubTilesComponent,
        ClubWithEventsComponent,
        AccordionListComponent,
        DashboardComponent,
        ImageGalleryComponent,
        ClubDetailsComponent,
        GuestLecturesDetailsComponent,
        CanteenMenuDetailsComponent
    ],
})
export class ComponentsModule {}