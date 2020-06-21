import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventsBookingPage } from './events-booking.page';

describe('EventsBookingPage', () => {
  let component: EventsBookingPage;
  let fixture: ComponentFixture<EventsBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventsBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
