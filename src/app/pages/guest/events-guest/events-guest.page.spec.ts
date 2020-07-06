import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventsGuestPage } from './events-guest.page';

describe('EventsGuestPage', () => {
  let component: EventsGuestPage;
  let fixture: ComponentFixture<EventsGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventsGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
