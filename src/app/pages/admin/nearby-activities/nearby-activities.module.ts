import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyActivitiesPageRoutingModule } from './nearby-activities-routing.module';

import { NearbyActivitiesPage } from './nearby-activities.page';
import {MaterialModule} from 'src/app/material.module';
import { NearbyActivitiesCreateComponent } from 'src/app/admin-component/nearby-activities-create/nearby-activities-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyActivitiesPageRoutingModule,
    MaterialModule
  ],
  declarations: [NearbyActivitiesPage, NearbyActivitiesCreateComponent]
})
export class NearbyActivitiesPageModule {}
