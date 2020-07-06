import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyBanksPageRoutingModule } from './nearby-banks-routing.module';
import {ComponentsModule} from 'src/app/components/components.module';

import { NearbyBanksPage } from './nearby-banks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyBanksPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NearbyBanksPage]
})
export class NearbyBanksPageModule {}
