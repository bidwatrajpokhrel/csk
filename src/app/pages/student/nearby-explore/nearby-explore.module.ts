import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyExplorePageRoutingModule } from './nearby-explore-routing.module';

import { NearbyExplorePage } from './nearby-explore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyExplorePageRoutingModule
  ],
  declarations: [NearbyExplorePage]
})
export class NearbyExplorePageModule {}
