import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubsPageRoutingModule } from './clubs-routing.module';

import { ClubsPage } from './clubs.page';
import {MaterialModule} from 'src/app/material.module';
import { ClubsCreateComponent } from 'src/app/admin-component/clubs-create/clubs-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubsPageRoutingModule,
    MaterialModule
  ],
  declarations: [ClubsPage, ClubsCreateComponent]
})
export class ClubsPageModule {}
