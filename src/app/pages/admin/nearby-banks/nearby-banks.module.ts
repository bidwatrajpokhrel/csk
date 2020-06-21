import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyBanksPageRoutingModule } from './nearby-banks-routing.module';

import { NearbyBanksPage } from './nearby-banks.page';
import{MaterialModule} from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyBanksPageRoutingModule,
    MaterialModule
  ],
  declarations: [NearbyBanksPage]
})
export class NearbyBanksPageModule {}
