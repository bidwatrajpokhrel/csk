import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubMembershipPageRoutingModule } from './club-membership-routing.module';

import { ClubMembershipPage } from './club-membership.page';
import {MaterialModule} from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubMembershipPageRoutingModule,
    MaterialModule
  ],
  declarations: [ClubMembershipPage]
})
export class ClubMembershipPageModule {}
