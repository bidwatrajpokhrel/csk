import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryServicesPageRoutingModule } from './library-services-routing.module';

import { LibraryServicesPage } from './library-services.page';
import {MaterialModule} from 'src/app/material.module';
import { LibraryServicesCreateComponent } from 'src/app/admin-component/library-services-create/library-services-create.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryServicesPageRoutingModule,
    MaterialModule
  ],
  declarations: [LibraryServicesPage, LibraryServicesCreateComponent]
})
export class LibraryServicesPageModule {}
