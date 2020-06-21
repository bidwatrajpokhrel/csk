import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryServicesPageRoutingModule } from './library-services-routing.module';

import { LibraryServicesPage } from './library-services.page';
import {MaterialModule} from 'src/app/material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryServicesPageRoutingModule,
    MaterialModule
  ],
  declarations: [LibraryServicesPage]
})
export class LibraryServicesPageModule {}
