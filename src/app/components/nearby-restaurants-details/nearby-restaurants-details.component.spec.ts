import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearbyRestaurantsDetailsComponent } from './nearby-restaurants-details.component';

describe('NearbyRestaurantsDetailsComponent', () => {
  let component: NearbyRestaurantsDetailsComponent;
  let fixture: ComponentFixture<NearbyRestaurantsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyRestaurantsDetailsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearbyRestaurantsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
