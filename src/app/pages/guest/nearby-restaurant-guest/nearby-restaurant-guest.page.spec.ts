import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearbyRestaurantGuestPage } from './nearby-restaurant-guest.page';

describe('NearbyRestaurantGuestPage', () => {
  let component: NearbyRestaurantGuestPage;
  let fixture: ComponentFixture<NearbyRestaurantGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyRestaurantGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearbyRestaurantGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
