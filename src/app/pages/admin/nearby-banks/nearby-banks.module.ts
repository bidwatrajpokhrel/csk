import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyBanksPageRoutingModule } from './nearby-banks-routing.module';

import { NearbyBanksPage } from './nearby-banks.page';
import{MaterialModule} from 'src/app/material.module';
import { NearbyBanksCreateComponent } from 'src/app/admin-component/nearby-banks-create/nearby-banks-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyBanksPageRoutingModule,
    MaterialModule
  ],
  declarations: [NearbyBanksPage, NearbyBanksCreateComponent]
})
export class NearbyBanksPageModule {}
