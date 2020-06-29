import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventsGalleryPage } from './events-gallery.page';

describe('EventsGalleryPage', () => {
  let component: EventsGalleryPage;
  let fixture: ComponentFixture<EventsGalleryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsGalleryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventsGalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
