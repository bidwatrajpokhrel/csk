import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubTilesComponent } from './club-tiles/club-tiles.component';
import { ClubWithEventsComponent } from './club-with-events/club-with-events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent } from './event-list/event-list.component';


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [ClubTilesComponent, ClubWithEventsComponent, EventDetailComponent, EventListComponent],
    exports: [ClubTilesComponent, ClubWithEventsComponent, EventDetailComponent, EventListComponent],
})
export class ComponentsModule {}