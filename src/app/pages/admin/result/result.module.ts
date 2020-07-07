import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultPageRoutingModule } from './result-routing.module';

import { ResultPage } from './result.page';
import {MaterialModule} from 'src/app/material.module';
import { ResultCreateComponent } from 'src/app/admin-component/result-create/result-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultPageRoutingModule,
    MaterialModule
  ],
  declarations: [ResultPage, ResultCreateComponent]
})
export class ResultPageModule {}
