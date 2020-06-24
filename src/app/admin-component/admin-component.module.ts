import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from 'src/app/material.module';

import { AdmissionInfoCreateComponent } from './admission-info-create/admission-info-create.component';
import {AssessmentCreateComponent} from './assessment-create/assessment-create.component';
import {StudentLibraryBooksCreateComponent} from './student-library-books-create/student-library-books-create.component';
import {BooksInLibraryCreateComponent} from './books-in-library-create/books-in-library-create.component';
import {CanteenMenuCreateComponent} from './canteen-menu-create/canteen-menu-create.component';
import {ClubMembershipCreateComponent} from './club-membership-create/club-membership-create.component';
import {ClubsCreateComponent} from './clubs-create/clubs-create.component';
import {DepartmentCreateComponent} from './department-create/department-create.component';
import {ECACreateComponent} from './ecacreate/ecacreate.component';
import {EmployeeDetailsCreateComponent} from './employee-details-create/employee-details-create.component';
import {EventsCreateComponent} from './events-create/events-create.component';
import {EventsBookingCreateComponent} from './events-booking-create/events-booking-create.component';
import {FacultyCreateComponent} from './faculty-create/faculty-create.component';
import {GuestLecturesCreateComponent} from './guest-lectures-create/guest-lectures-create.component';
import {LibraryServicesCreateComponent} from './library-services-create/library-services-create.component';
import {MajorCreateComponent} from './major-create/major-create.component';
import {NearbyActivitiesCreateComponent} from './nearby-activities-create/nearby-activities-create.component';
import {NearbyBanksCreateComponent} from './nearby-banks-create/nearby-banks-create.component';
import {NoticeCreateComponent} from './notice-create/notice-create.component';
import {RestaurantsNearbyCreateComponent} from './restaurants-nearby-create/restaurants-nearby-create.component';
import {ResultCreateComponent} from './result-create/result-create.component';
import {StudentCreateComponent} from './student-create/student-create.component';
import {UnitCreateComponent} from './unit-create/unit-create.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    AdmissionInfoCreateComponent,
    AssessmentCreateComponent,
    StudentLibraryBooksCreateComponent,
    BooksInLibraryCreateComponent,
    CanteenMenuCreateComponent,
    ClubMembershipCreateComponent,
    ClubsCreateComponent,
    DepartmentCreateComponent,
    ECACreateComponent,
    EmployeeDetailsCreateComponent,
    EventsCreateComponent,
    EventsBookingCreateComponent,
    FacultyCreateComponent,
    GuestLecturesCreateComponent,
    LibraryServicesCreateComponent,
    MajorCreateComponent,
    NearbyActivitiesCreateComponent,
    NearbyBanksCreateComponent,
    NoticeCreateComponent,
    RestaurantsNearbyCreateComponent,
    ResultCreateComponent,
    StudentCreateComponent,
    UnitCreateComponent
  ],
  exports: [BooksInLibraryCreateComponent,
    CanteenMenuCreateComponent,
    ClubMembershipCreateComponent,
    ClubsCreateComponent,
    DepartmentCreateComponent,
    ECACreateComponent,
    EmployeeDetailsCreateComponent,
    EventsCreateComponent,
    EventsBookingCreateComponent,
    FacultyCreateComponent,
    GuestLecturesCreateComponent,
    LibraryServicesCreateComponent,
    MajorCreateComponent,
    NearbyActivitiesCreateComponent,
    NearbyBanksCreateComponent,
    NoticeCreateComponent,
    RestaurantsNearbyCreateComponent,
    ResultCreateComponent,
    StudentCreateComponent,
    UnitCreateComponent,
    AdmissionInfoCreateComponent,
    AssessmentCreateComponent,
    StudentLibraryBooksCreateComponent]
})
export class AdminComponentModule { }
