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
  {
    path: 'guest-home',
    loadChildren: () => import('./pages/guest/guest-home/guest-home.module').then( m => m.GuestHomePageModule)
  },
  {
    path: 'about-university-guest',
    loadChildren: () => import('./pages/guest/about-university-guest/about-university-guest.module').then( m => m.AboutUniversityGuestPageModule)
  },
  {
    path: 'recognition-guest',
    loadChildren: () => import('./pages/guest/recognition-guest/recognition-guest.module').then( m => m.RecognitionGuestPageModule)
  },
  {
    path: 'messages-guest',
    loadChildren: () => import('./pages/guest/messages-guest/messages-guest.module').then( m => m.MessagesGuestPageModule)
  },
  {
    path: 'infrastructure-guest',
    loadChildren: () => import('./pages/guest/infrastructure-guest/infrastructure-guest.module').then( m => m.InfrastructureGuestPageModule)
  },
  {
    path: 'facilities-guest',
    loadChildren: () => import('./pages/guest/facilities-guest/facilities-guest.module').then( m => m.FacilitiesGuestPageModule)
  },
  {
    path: 'our-team-guest',
    loadChildren: () => import('./pages/guest/our-team-guest/our-team-guest.module').then( m => m.OurTeamGuestPageModule)
  },
  {
    path: 'alumni-stories-guest',
    loadChildren: () => import('./pages/guest/alumni-stories-guest/alumni-stories-guest.module').then( m => m.AlumniStoriesGuestPageModule)
  },
  {
    path: 'holidays-list-guest',
    loadChildren: () => import('./pages/guest/holidays-list-guest/holidays-list-guest.module').then( m => m.HolidaysListGuestPageModule)
  },
  {
    path: 'intake-calender-guest',
    loadChildren: () => import('./pages/guest/intake-calender-guest/intake-calender-guest.module').then( m => m.IntakeCalenderGuestPageModule)
  },
  {
    path: 'admission-procedure-guest',
    loadChildren: () => import('./pages/guest/admission-procedure-guest/admission-procedure-guest.module').then( m => m.AdmissionProcedureGuestPageModule)
  },
  {
    path: 'fee-structure-guest',
    loadChildren: () => import('./pages/guest/fee-structure-guest/fee-structure-guest.module').then( m => m.FeeStructureGuestPageModule)
  },
  {
    path: 'scholarship-guest',
    loadChildren: () => import('./pages/guest/scholarship-guest/scholarship-guest.module').then( m => m.ScholarshipGuestPageModule)
  },
  {
    path: 'student-support',
    loadChildren: () => import('./pages/guest/student-support/student-support.module').then( m => m.StudentSupportPageModule)
  },
  {
    path: 'events-guest',
    loadChildren: () => import('./pages/guest/events-guest/events-guest.module').then( m => m.EventsGuestPageModule)
  },
  {
    path: 'events-gallery-guest',
    loadChildren: () => import('./pages/guest/events-gallery-guest/events-gallery-guest.module').then( m => m.EventsGalleryGuestPageModule)
  },
  {
    path: 'news-guest',
    loadChildren: () => import('./pages/guest/news-guest/news-guest.module').then( m => m.NewsGuestPageModule)
  },
  {
    path: 'courses-guest',
    loadChildren: () => import('./pages/guest/courses-guest/courses-guest.module').then( m => m.CoursesGuestPageModule)
  },
  {
    path: 'courses-details-guest',
    loadChildren: () => import('./pages/guest/courses-details-guest/courses-details-guest.module').then( m => m.CoursesDetailsGuestPageModule)
  },
  {
    path: 'all-event-student',
    loadChildren: () => import('./pages/student/all-event-student/all-event-student.module').then( m => m.AllEventStudentPageModule)
  },
  {
    path: 'all-guest-lectures-student',
    loadChildren: () => import('./pages/student/all-guest-lectures-student/all-guest-lectures-student.module').then( m => m.AllGuestLecturesStudentPageModule)
  },
  {
    path: 'canteen-menu-guest',
    loadChildren: () => import('./pages/guest/canteen-menu-guest/canteen-menu-guest.module').then( m => m.CanteenMenuGuestPageModule)
  },
  {
    path: 'events-details-guest',
    loadChildren: () => import('./pages/guest/events-details-guest/events-details-guest.module').then( m => m.EventsDetailsGuestPageModule)
  },
  {
    path: 'club-guest',
    loadChildren: () => import('./pages/guest/club-guest/club-guest.module').then( m => m.ClubGuestPageModule)
  },
  {
    path: 'explore-nearby-guest',
    loadChildren: () => import('./pages/guest/explore-nearby-guest/explore-nearby-guest.module').then( m => m.ExploreNearbyGuestPageModule)
  },
  {
    path: 'nearby-activity-guest',
    loadChildren: () => import('./pages/guest/nearby-activity-guest/nearby-activity-guest.module').then( m => m.NearbyActivityGuestPageModule)
  },
  {
    path: 'nearby-restaurant-guest',
    loadChildren: () => import('./pages/guest/nearby-restaurant-guest/nearby-restaurant-guest.module').then( m => m.NearbyRestaurantGuestPageModule)
  },
  {
    path: 'nearby-banks-guest',
    loadChildren: () => import('./pages/guest/nearby-banks-guest/nearby-banks-guest.module').then( m => m.NearbyBanksGuestPageModule)
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
