import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventsGalleryGuestPage } from './events-gallery-guest.page';

describe('EventsGalleryGuestPage', () => {
  let component: EventsGalleryGuestPage;
  let fixture: ComponentFixture<EventsGalleryGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsGalleryGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventsGalleryGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
