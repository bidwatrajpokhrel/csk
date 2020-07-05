import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalleryPageRoutingModule } from './gallery-routing.module';

import { GalleryPage } from './gallery.page';
import { MaterialModule } from 'src/app/material.module';
import { GalleryCreateComponent } from 'src/app/admin-component/gallery-create/gallery-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalleryPageRoutingModule,
    MaterialModule
  ],
  declarations: [GalleryPage, GalleryCreateComponent]
})
export class GalleryPageModule {}
