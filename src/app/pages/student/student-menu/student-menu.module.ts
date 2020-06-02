import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentMenuPageRoutingModule } from './student-menu-routing.module';

import { StudentMenuPage } from './student-menu.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentMenuPageRoutingModule,
    ComponentsModule],

  exports: [ComponentsModule],
  declarations: [StudentMenuPage]
})
export class StudentMenuPageModule {}
