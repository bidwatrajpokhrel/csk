import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursesGuestPage } from './courses-guest.page';

describe('CoursesGuestPage', () => {
  let component: CoursesGuestPage;
  let fixture: ComponentFixture<CoursesGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
