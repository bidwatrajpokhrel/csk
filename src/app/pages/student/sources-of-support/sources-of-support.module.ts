import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SourcesOfSupportPageRoutingModule } from './sources-of-support-routing.module';
import {ComponentsModule} from 'src/app/components/components.module';
import { SourcesOfSupportPage } from './sources-of-support.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SourcesOfSupportPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SourcesOfSupportPage]
})
export class SourcesOfSupportPageModule {}
