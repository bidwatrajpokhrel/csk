import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ComponentsModule} from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';
import {ComponentsGuestModule} from '../components-guest/components-guest.module';
import { ExploreNearbyGuestPageRoutingModule } from './explore-nearby-guest-routing.module';
import {NearbyExplorePageModule} from 'src/app/pages/student/nearby-explore/nearby-explore.module';
import { ExploreNearbyGuestPage } from './explore-nearby-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreNearbyGuestPageRoutingModule,
    NearbyExplorePageModule,
    ComponentsGuestModule,
    ComponentsModule
  ],
  declarations: [ExploreNearbyGuestPage]
})
export class ExploreNearbyGuestPageModule {}
