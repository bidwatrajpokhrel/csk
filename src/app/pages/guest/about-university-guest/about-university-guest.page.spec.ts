import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutUniversityGuestPage } from './about-university-guest.page';

describe('AboutUniversityGuestPage', () => {
  let component: AboutUniversityGuestPage;
  let fixture: ComponentFixture<AboutUniversityGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUniversityGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUniversityGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
