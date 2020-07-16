import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearbyActivityGuestPage } from './nearby-activity-guest.page';

describe('NearbyActivityGuestPage', () => {
  let component: NearbyActivityGuestPage;
  let fixture: ComponentFixture<NearbyActivityGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyActivityGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearbyActivityGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
