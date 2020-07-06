import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HolidaysListGuestPage } from './holidays-list-guest.page';

describe('HolidaysListGuestPage', () => {
  let component: HolidaysListGuestPage;
  let fixture: ComponentFixture<HolidaysListGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidaysListGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HolidaysListGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
