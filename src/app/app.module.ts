import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { SuperTabsModule} from '@ionic-super-tabs/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

// import {AdmissionInfoCreateComponent} from 'src/app/admin-component/admission-info-create/admission-info-create.component';
// import {AssessmentCreateComponent} from 'src/app/admin-component/assessment-create/assessment-create.component';
// import {StudentLibraryBooksCreateComponent} from 'src/app/admin-component/student-library-books-create/student-library-books-create.component';
// import {BooksInLibraryCreateComponent} from 'src/app/admin-component/books-in-library-create/books-in-library-create.component';
// import {CanteenMenuCreateComponent} from 'src/app/admin-component/canteen-menu-create/canteen-menu-create.component';
// import {ClubMembershipCreateComponent} from 'src/app/admin-component/club-membership-create/club-membership-create.component';
// import {ClubsCreateComponent} from 'src/app/admin-component/clubs-create/clubs-create.component';
// import {DepartmentCreateComponent} from 'src/app/admin-component/department-create/department-create.component';
// import {ECACreateComponent} from 'src/app/admin-component/ecacreate/ecacreate.component';
// import {EmployeeDetailsCreateComponent} from 'src/app/admin-component/employee-details-create/employee-details-create.component';
// import {EventsCreateComponent} from 'src/app/admin-component/events-create/events-create.component';
// import {EventsBookingCreateComponent} from 'src/app/admin-component/events-booking-create/events-booking-create.component';
// import {FacultyCreateComponent} from 'src/app/admin-component/faculty-create/faculty-create.component';
// import {GuestLecturesCreateComponent} from 'src/app/admin-component/guest-lectures-create/guest-lectures-create.component';
// import {LibraryServicesCreateComponent} from 'src/app/admin-component/library-services-create/library-services-create.component';
// import {MajorCreateComponent} from 'src/app/admin-component/major-create/major-create.component';
// import {NearbyActivitiesCreateComponent} from 'src/app/admin-component/nearby-activities-create/nearby-activities-create.component';
// import {NearbyBanksCreateComponent} from 'src/app/admin-component/nearby-banks-create/nearby-banks-create.component';
// import {NoticeCreateComponent} from 'src/app/admin-component/notice-create/notice-create.component';
// import {RestaurantsNearbyCreateComponent} from 'src/app/admin-component/restaurants-nearby-create/restaurants-nearby-create.component';
// import {ResultCreateComponent} from 'src/app/admin-component/result-create/result-create.component';
// import {StudentCreateComponent} from 'src/app/admin-component/student-create/student-create.component';
// import {UnitCreateComponent} from 'src/app/admin-component/unit-create/unit-create.component';


@NgModule({
  declarations: [AppComponent,
    // AdmissionInfoCreateComponent,
  //   AssessmentCreateComponent,
  //   StudentLibraryBooksCreateComponent,
  //   BooksInLibraryCreateComponent,
  //   CanteenMenuCreateComponent,
  //   ClubMembershipCreateComponent,
  //   ClubsCreateComponent,
  //   DepartmentCreateComponent,
  //   ECACreateComponent,
  //   EmployeeDetailsCreateComponent,
  //   EventsCreateComponent,
  //   EventsBookingCreateComponent,
  //   FacultyCreateComponent,
  //   GuestLecturesCreateComponent,
  //   LibraryServicesCreateComponent,
  //   MajorCreateComponent,
  //   NearbyActivitiesCreateComponent,
  //   NearbyBanksCreateComponent,
  //   NoticeCreateComponent,
  //   RestaurantsNearbyCreateComponent,
  //   ResultCreateComponent,
  //   StudentCreateComponent,
    // UnitCreateComponent
  ],
  entryComponents: [//AdmissionInfoCreateComponent,
  //   AssessmentCreateComponent,
  //   StudentLibraryBooksCreateComponent,
  //   BooksInLibraryCreateComponent,
  //   CanteenMenuCreateComponent,
  //   ClubMembershipCreateComponent,
  //   ClubsCreateComponent,
  //   DepartmentCreateComponent,
  //   ECACreateComponent,
  //   EmployeeDetailsCreateComponent,
  //   EventsCreateComponent,
  //   EventsBookingCreateComponent,
  //   FacultyCreateComponent,
  //   GuestLecturesCreateComponent,
  //   LibraryServicesCreateComponent,
  //   MajorCreateComponent,
  //   NearbyActivitiesCreateComponent,
  //   NearbyBanksCreateComponent,
  //   NoticeCreateComponent,
  //   RestaurantsNearbyCreateComponent,
  //   ResultCreateComponent,
  //   StudentCreateComponent,
    // UnitCreateComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SuperTabsModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    DatePipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
