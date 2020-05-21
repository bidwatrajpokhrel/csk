import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubTilesComponent } from './club-tiles/club-tiles.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [ClubTilesComponent],
    exports: [ClubTilesComponent],
})
export class ComponentsModule {}