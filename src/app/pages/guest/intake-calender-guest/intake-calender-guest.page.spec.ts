import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntakeCalenderGuestPage } from './intake-calender-guest.page';

describe('IntakeCalenderGuestPage', () => {
  let component: IntakeCalenderGuestPage;
  let fixture: ComponentFixture<IntakeCalenderGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakeCalenderGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntakeCalenderGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
