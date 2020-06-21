import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyActivitiesPageRoutingModule } from './nearby-activities-routing.module';

import { NearbyActivitiesPage } from './nearby-activities.page';
import {MaterialModule} from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyActivitiesPageRoutingModule,
    MaterialModule
  ],
  declarations: [NearbyActivitiesPage]
})
export class NearbyActivitiesPageModule {}
