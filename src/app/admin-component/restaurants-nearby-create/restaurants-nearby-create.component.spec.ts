import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurantsNearbyCreateComponent } from './restaurants-nearby-create.component';

describe('RestaurantsNearbyCreateComponent', () => {
  let component: RestaurantsNearbyCreateComponent;
  let fixture: ComponentFixture<RestaurantsNearbyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsNearbyCreateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantsNearbyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
