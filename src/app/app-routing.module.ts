import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin-menu',
    loadChildren: () => import('./pages/admin/admin-menu/admin-menu.module').then( m => m.AdminMenuPageModule)
  },
  {
    path: 'guest-menu',
    loadChildren: () => import('./pages/guest/guest-menu/guest-menu.module').then( m => m.GuestMenuPageModule)
  },
  {
    path: 'student-menu',
    loadChildren: () => import('./pages/student/student-menu/student-menu.module').then( m => m.StudentMenuPageModule)
   },
   
  // {
  //   path: 'talking-heads',
  //   loadChildren: () => import('./pages/admin/talking-heads/talking-heads.module').then( m => m.TalkingHeadsPageModule)
  // },

  // {
  //   path: 'gallery',
  //   loadChildren: () => import('./pages/admin/gallery/gallery.module').then( m => m.GalleryPageModule)
  // }

  // {
  //   path: 'admission-info-table',
  //   loadChildren: () => import('./pages/admin/admission-info-table/admission-info-table.module').then( m => m.AdmissionInfoTablePageModule)
  // },
  // {
  //   path: 'assessment',
  //   loadChildren: () => import('./pages/admin/assessment/assessment.module').then( m => m.AssessmentPageModule)
  // },
  // {
  //   path: 'books-in-library',
  //   loadChildren: () => import('./pages/admin/books-in-library/books-in-library.module').then( m => m.BooksInLibraryPageModule)
  // },
  // {
  //   path: 'student-library-books',
  //   loadChildren: () => import('./pages/admin/student-library-books/student-library-books.module').then( m => m.StudentLibraryBooksPageModule)
  // },
  // {
  //   path: 'canteen-menu',
  //   loadChildren: () => import('./pages/admin/canteen-menu/canteen-menu.module').then( m => m.CanteenMenuPageModule)
  // },
  // {
  //   path: 'clubs',
  //   loadChildren: () => import('./pages/admin/clubs/clubs.module').then( m => m.ClubsPageModule)
  // },
  // {
  //   path: 'eca',
  //   loadChildren: () => import('./pages/admin/eca/eca.module').then( m => m.ECAPageModule)
  // },
  // {
  //   path: 'club-membership',
  //   loadChildren: () => import('./pages/admin/club-membership/club-membership.module').then( m => m.ClubMembershipPageModule)
  // },
  // {
  //   path: 'employee-details',
  //   loadChildren: () => import('./pages/admin/employee-details/employee-details.module').then( m => m.EmployeeDetailsPageModule)
  // },
  // {
  //   path: 'events',
  //   loadChildren: () => import('./pages/admin/events/events.module').then( m => m.EventsPageModule)
  // },
  // {
  //   path: 'events-booking',
  //   loadChildren: () => import('./pages/admin/events-booking/events-booking.module').then( m => m.EventsBookingPageModule)
  // },
  // {
  //   path: 'faculty',
  //   loadChildren: () => import('./pages/admin/faculty/faculty.module').then( m => m.FacultyPageModule)
  // },
  // {
  //   path: 'guest-lectures',
  //   loadChildren: () => import('./pages/admin/guest-lectures/guest-lectures.module').then( m => m.GuestLecturesPageModule)
  // },
  // {
  //   path: 'library-services',
  //   loadChildren: () => import('./pages/admin/library-services/library-services.module').then( m => m.LibraryServicesPageModule)
  // },
  // {
  //   path: 'major',
  //   loadChildren: () => import('./pages/admin/major/major.module').then( m => m.MajorPageModule)
  // },
  // {
  //   path: 'student',
  //   loadChildren: () => import('./pages/admin/student/student.module').then( m => m.StudentPageModule)
  // },
  // {
  //   path: 'department',
  //   loadChildren: () => import('./pages/admin/department/department.module').then( m => m.DepartmentPageModule)
  // },
  // {
  //   path: 'nearby-activities',
  //   loadChildren: () => import('./pages/admin/nearby-activities/nearby-activities.module').then( m => m.NearbyActivitiesPageModule)
  // },
  // {
  //   path: 'nearby-banks',
  //   loadChildren: () => import('./pages/admin/nearby-banks/nearby-banks.module').then( m => m.NearbyBanksPageModule)
  // },
  // {
  //   path: 'notice',
  //   loadChildren: () => import('./pages/admin/notice/notice.module').then( m => m.NoticePageModule)
  // },
  // {
  //   path: 'restaurants-nearby',
  //   loadChildren: () => import('./pages/admin/restaurants-nearby/restaurants-nearby.module').then( m => m.RestaurantsNearbyPageModule)
  // },
  // {
  //   path: 'result',
  //   loadChildren: () => import('./pages/admin/result/result.module').then( m => m.ResultPageModule)
  // },
  // {
  //   path: 'unit',
  //   loadChildren: () => import('./pages/admin/unit/unit.module').then( m => m.UnitPageModule)
  // },
  // {
  //   path: 'guest-lectures',
  //   loadChildren: () => import('./pages/student/guest-lectures/guest-lectures.module').then( m => m.GuestLecturesPageModule)
  // },
  // {
  //   path: 'events-gallery',
  //   loadChildren: () => import('./pages/student/events-gallery/events-gallery.module').then( m => m.EventsGalleryPageModule)
  // },
  // {
  //   path: 'student-dashboard',
  //   loadChildren: () => import('./pages/student/student-dashboard/student-dashboard.module').then( m => m.StudentDashboardPageModule)
  // },
  // {
  //   path: 'canteen-menu',
  //   loadChildren: () => import('./pages/student/canteen-menu/canteen-menu.module').then( m => m.CanteenMenuPageModule)
  // },
  // {
  //   path: 'event',
  //   loadChildren: () => import('./pages/student/event/event.module').then( m => m.EventPageModule)
  // },

  

  // {
  //   path: 'sources-of-support',
  //   loadChildren: () => import('./pages/student/sources-of-support/sources-of-support.module').then( m => m.SourcesOfSupportPageModule)
  // },
  // {
  //   path: 'lecture-schedule',
  //   loadChildren: () => import('./pages/student/lecture-schedule/lecture-schedule.module').then( m => m.LectureSchedulePageModule)
  // },
  // {
  //   path: 'events',
  //   loadChildren: () => import('./pages/student/events/events.module').then( m => m.EventsPageModule)
  // },


  // {
  //   path: 'student-club-detail',
  //   loadChildren: () => import('./pages/student/student-club-detail/student-club-detail.module').then( m => m.StudentClubDetailPageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
