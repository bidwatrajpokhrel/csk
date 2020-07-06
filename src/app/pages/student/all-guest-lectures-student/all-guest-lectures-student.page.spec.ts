import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllGuestLecturesStudentPage } from './all-guest-lectures-student.page';

describe('AllGuestLecturesStudentPage', () => {
  let component: AllGuestLecturesStudentPage;
  let fixture: ComponentFixture<AllGuestLecturesStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGuestLecturesStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllGuestLecturesStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
