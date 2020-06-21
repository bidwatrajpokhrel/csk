import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMenuPage } from './admin-menu.page';


const routes: Routes = [
  {
    path: '',
    component: AdminMenuPage,
    children: [

        {
          path: 'admission-info-table',
          loadChildren: () => import('../admission-info-table/admission-info-table.module').then( m => m.AdmissionInfoTablePageModule)
        },
        {
          path: 'assessment',
          loadChildren: () => import('../assessment/assessment.module').then( m => m.AssessmentPageModule)
        },
        {
          path: 'books-in-library',
          loadChildren: () => import('../books-in-library/books-in-library.module').then( m => m.BooksInLibraryPageModule)
        },
        {
          path: 'student-library-books',
          loadChildren: () => import('../student-library-books/student-library-books.module').then( m => m.StudentLibraryBooksPageModule)
        },
        {
          path: 'canteen-menu',
          loadChildren: () => import('../canteen-menu/canteen-menu.module').then( m => m.CanteenMenuPageModule)
        },
        {
          path: 'clubs',
          loadChildren: () => import('../clubs/clubs.module').then( m => m.ClubsPageModule)
        },
        {
          path: 'club-membership',
          loadChildren: () => import('../club-membership/club-membership.module').then( m => m.ClubMembershipPageModule)
        },
        {
          path: 'department',
          loadChildren: () => import('../department/department.module').then( m => m.DepartmentPageModule)
        },
        {
          path: 'eca',
          loadChildren: () => import('../eca/eca.module').then( m => m.ECAPageModule)
        },
        {
          path: 'employee-details',
          loadChildren: () => import('../employee-details/employee-details.module').then( m => m.EmployeeDetailsPageModule)
        },
        {
          path: 'events',
          loadChildren: () => import('../events/events.module').then( m => m.EventsPageModule)
        },
        {
          path: 'events-booking',
          loadChildren: () => import('../events-booking/events-booking.module').then( m => m.EventsBookingPageModule)
        },
        {
          path: 'faculty',
          loadChildren: () => import('../faculty/faculty.module').then( m => m.FacultyPageModule)
        },
        {
          path: 'guest-lectures',
          loadChildren: () => import('../guest-lectures/guest-lectures.module').then( m => m.GuestLecturesPageModule)
        },
        {
          path: 'library-services',
          loadChildren: () => import('../library-services/library-services.module').then( m => m.LibraryServicesPageModule)
        },
        {
          path: 'major',
          loadChildren: () => import('../major/major.module').then( m => m.MajorPageModule)
        },
        {
          path: 'nearby-activities',
          loadChildren: () => import('../nearby-activities/nearby-activities.module').then( m => m.NearbyActivitiesPageModule)
        },
        {
          path: 'nearby-banks',
          loadChildren: () => import('../nearby-banks/nearby-banks.module').then( m => m.NearbyBanksPageModule)
        },
        {
          path: 'notice',
          loadChildren: () => import('../notice/notice.module').then( m => m.NoticePageModule)
        },
        {
          path: 'restaurants-nearby',
          loadChildren: () => import('../restaurants-nearby/restaurants-nearby.module').then( m => m.RestaurantsNearbyPageModule)
        },
        {
          path: 'result',
          loadChildren: () => import('../result/result.module').then( m => m.ResultPageModule)
        },
        {
          path: 'student',
          loadChildren: () => import('../student/student.module').then( m => m.StudentPageModule)
        },
        {
          path: 'unit',
          loadChildren: () => import('../unit/unit.module').then( m => m.UnitPageModule)
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminMenuPageRoutingModule {}
