import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreNearbyGuestPage } from './explore-nearby-guest.page';

describe('ExploreNearbyGuestPage', () => {
  let component: ExploreNearbyGuestPage;
  let fixture: ComponentFixture<ExploreNearbyGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreNearbyGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreNearbyGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
