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
import {AllEventsComponent} from './all-events/all-events.component';
import {UnitDetailsComponent} from './unit-details/unit-details.component';
import {UnitDetailsInfoComponent} from './unit-details-info/unit-details-info.component';
import {SOSdetailsComponent} from './sosdetails/sosdetails.component';
import {NearbyBanksDetailsComponent} from './nearby-banks-details/nearby-banks-details.component';
import {NearbyActivityDetailsComponent} from './nearby-activity-details/nearby-activity-details.component';
import {NearbyRestaurantsDetailsComponent} from './nearby-restaurants-details/nearby-restaurants-details.component';
import {CanteenMenuComponent} from './canteen-menu/canteen-menu.component';
import { EcaDetailsComponent } from './eca-details/eca-details.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { StudentRequestEventComponent } from './student-request-event/student-request-event.component';
import { FeedbackComponent } from './feedback/feedback.component';

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
        NearbyRestaurantsDetailsComponent,
        NearbyActivityDetailsComponent,
        ClubWithEventsComponent,
        AccordionListComponent,
        DashboardComponent,
        ImageGalleryComponent,
        ClubDetailsComponent,
        GuestLecturesDetailsComponent,
        CanteenMenuDetailsComponent,
        AllEventsComponent,
        UnitDetailsComponent,
        UnitDetailsInfoComponent,
        SOSdetailsComponent,
        NearbyBanksDetailsComponent,
        CanteenMenuComponent,
        EcaDetailsComponent,
        FacultyDetailsComponent,
        StudentRequestEventComponent,
        FeedbackComponent
    ],
    exports: [
        ClubTilesComponent,
        NearbyRestaurantsDetailsComponent,
        NearbyActivityDetailsComponent,
        ClubWithEventsComponent,
        AccordionListComponent,
        DashboardComponent,
        ImageGalleryComponent,
        ClubDetailsComponent,
        GuestLecturesDetailsComponent,
        CanteenMenuDetailsComponent,
        AllEventsComponent,
        UnitDetailsComponent,
        UnitDetailsInfoComponent,
        SOSdetailsComponent,
        NearbyBanksDetailsComponent,
        CanteenMenuComponent,
        EcaDetailsComponent,
        FacultyDetailsComponent,
        StudentRequestEventComponent,
        FeedbackComponent
    ],
})
export class ComponentsModule {}