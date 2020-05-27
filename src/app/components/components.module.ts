import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubTilesComponent } from './club-tiles/club-tiles.component';
import { ClubWithEventsComponent } from './club-with-events/club-with-events.component';
import { AccordionListComponent } from './accordion-list/accordion-list.component';


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [
        ClubTilesComponent,
        ClubWithEventsComponent,
        AccordionListComponent
    ],
    exports: [
        ClubTilesComponent,
        ClubWithEventsComponent,
        AccordionListComponent
    ],
})
export class ComponentsModule {}